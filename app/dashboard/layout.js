import { auth, authOptions } from "@/auth"
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function LayoutPrivate({ children }) {
    const session = await getServerSession(authOptions);
    if (!session) {
        redirect("/");
    }


    return children;
}

