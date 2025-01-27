import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";
import connectMongo from "@/libs/mongoose";
import User from "@/models/User";
import { lemonSqueezyApiInstance } from "@/utils/axios";
import { NextResponse } from "next/server";

// Use directive instead of exporting dynamic
export const dynamic = "force-dynamic";

export async function POST(req) {
    try {
        const reqData = await req.json();
        if (!reqData.productId) {
            return NextResponse.json(
                { message: "productId is required" },
                { status: 400 }
            );
        }

        // Replace auth() with getServerSession()
        console.log("Starting auth check...");
        const session = await getServerSession(authOptions);
        console.log("Session details:", {
            exists: !!session,
            userId: session?.user?.id,
            email: session?.user?.email
        });

        if (!session) {
            console.log("No session found - unauthorized");
            return NextResponse.json(
                { message: "Unauthorized" },
                { status: 401 }
            );
        }

        await connectMongo();
        console.log("MongoDB connected successfully");

        const user = await User.findById(session?.user?.id);
        if (!user) {
            return NextResponse.json(
                { message: "User not found" },
                { status: 404 }
            );
        }

        const response = await lemonSqueezyApiInstance.post('/checkouts', {
            data: {
                type: "checkouts",
                attributes: {
                    checkout_data: {
                        custom: {
                            user_id: session.user.id,
                            user_email: session.user.email,
                        },
                    },
                },
                relationships: {
                    store: {
                        data: {
                            type: "stores",
                            id: process.env.LEMON_SQEEZY_STORE_ID.toString(),
                        },
                    },
                    variant: {
                        data: {
                            type: "variants",
                            id: reqData.productId.toString(),
                        },
                    },
                },
            },
        });
        const checkoutUrl = response.data.data.attributes.url;
        console.log('Checkout created successfully:', response.data);
        console.log(checkoutUrl);

        return NextResponse.json({ checkoutUrl });
    } catch (error) {
        console.error('Error in POST handler:', error);
        return NextResponse.json(
            { message: "An error occurred", error: error.message },
            { status: 500 }
        );
    }
}
