interface DocumentIdPageProps {
    params: Promise<{ documentId: string }>;
}
import { Editor } from "./editor";
import { NavBar } from "./navBar";
import { Toolbar } from "./toolbar";

const DocumentIdPage = async ({ params }: DocumentIdPageProps) => {
    // const awaitedParams = await params;
    // const documentId = awaitedParams.documentId;

    return (
        <div className="min-h-screen bg-[#FAFBFD]">
            <div className="flex flex-col px-4 pt-2 gap-y-2 fixed top-0 left-0 right-0 z-10 bg-[#FAFBFD] print:border-hidden">
                <NavBar />
                <Toolbar />
            </div>
            <div className="pt-[114px] print:pt-0">
                <Editor />
            </div>
        </div>
    );
};

export default DocumentIdPage;
