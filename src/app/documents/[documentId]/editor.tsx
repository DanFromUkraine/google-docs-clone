"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { TaskList } from "@tiptap/extension-list";
import { TaskItem } from "@tiptap/extension-task-item";
import { TableKit } from "@tiptap/extension-table";
import { Gapcursor } from "@tiptap/extensions";
import Image from "@tiptap/extension-image";
import ImageResize from "tiptap-extension-resize-image";
import { useEditorStore } from "@/store/use-editor-store";
import Underline from "@tiptap/extension-underline";
import FontFamily from "@tiptap/extension-font-family";
import { TextStyle } from "@tiptap/extension-text-style";

export const Editor = () => {
    const { setEditor } = useEditorStore();
    const editor = useEditor({
        onCreate({ editor: editor_local }) {
            setEditor(editor_local);
        },
        onDestroy() {
            setEditor(null);
        },
        onUpdate({ editor }) {
            setEditor(editor);
        },
        onSelectionUpdate({ editor }) {
            setEditor(editor);
        },
        onTransaction({ editor }) {
            setEditor(editor);
        },
        onFocus({ editor }) {
            setEditor(editor);
        },
        onBlur({ editor }) {
            setEditor(editor);
        },
        onContentError({ editor }) {
            setEditor(editor);
        },
        immediatelyRender: false,
        editorProps: {
            attributes: {
                class: "focus:outline-none print:border-0 flex flex-col min-h-full w-full pt-10 pb-10 cursor-text",
            },
        },
        extensions: [
            StarterKit,
            FontFamily,
            TaskList,
            ImageResize,
            TaskItem.configure({ nested: true }),
            TableKit.configure({
                table: {
                    resizable: true,
                },
            }),
            Gapcursor,
            Image,
            Underline,
            TextStyle,
        ],
        content: `
            <p>Hello, world!!! 🌍 </p>

                <table>
                  <tbody>
                    <tr>
                      <th>Name</th>
                      <th colspan="3">Description</th>
                    </tr>
                    <tr>
                      <td>Cyndi Lauper</td>
                      <td>Singer</td>
                      <td>Songwriter</td>
                      <td>Actress</td>
                    </tr>
                  </tbody>
                </table>


              `,
    });

    return (
        <div className="size-full overflow-x-auto bg-[#F9FBFD] px-4 print:p-0 min-h-screen print:bg-white print:overflow-visible">
            <div className="max-w-[100vw] border bg-white border-[#C7C7C7] flex justify-center w-2/5 h-[calc(40vw*1.414)] my-4 print:py-0 mx-auto print:w-full print:min-w-0">
                <EditorContent
                    style={{ paddingLeft: "56px", paddingRight: "56px" }}
                    className="h-full! w-full"
                    editor={editor}
                />
            </div>
        </div>
    );
};
