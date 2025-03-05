// // "use client";

// // import StarterKit from '@tiptap/starter-kit'
// // import TaskItem from '@tiptap/extension-task-item'
// // import TaskList from '@tiptap/extension-task-list'
// // import Table from '@tiptap/extension-table'
// // import Image from '@tiptap/extension-image'
// // import TextAlign from '@tiptap/extension-text-align'
// // import Link from '@tiptap/extension-link'
// // import { Color } from '@tiptap/extension-color'
// // import Highlight from "@tiptap/extension-highlight"
// // import FontFamily from '@tiptap/extension-font-family'
// // import TextStyle from '@tiptap/extension-text-style'
// // import Underline from '@tiptap/extension-underline'
// // import ImageResize from "tiptap-extension-resize-image";
// // import TableCell from '@tiptap/extension-table-cell'
// // import TableHeader from '@tiptap/extension-table-header'
// // import TableRow from '@tiptap/extension-table-row'
// // import { useEditor, EditorContent } from '@tiptap/react'
// // import { useLiveblocksExtension } from "@liveblocks/react-tiptap";
// // import { useStorage } from '@liveblocks/react';

// // import { useEditorStore } from '@/store/use-editor-store';
// // import { FontSizeExtension } from '@/extensions/font-size';
// // import { LineHeightExtension } from '@/extensions/line-height';
// // import { LEFT_MARGIN_DEFAULT, RIGHT_MARGIN_DEFAULT } from '@/constants/margins';

// // import { Ruler } from './ruler';
// // import { Threads } from './threads';

// // interface EditorProps {
// //   initialContent?: string | undefined;
// // };

// // export const Editor = ({ initialContent }: EditorProps) => {
// //   const leftMargin = useStorage((root) => root.leftMargin) ?? LEFT_MARGIN_DEFAULT;
// //   const rightMargin = useStorage((root) => root.rightMargin) ?? RIGHT_MARGIN_DEFAULT;

// //   const liveblocks = useLiveblocksExtension({
// //     initialContent,
// //     offlineSupport_experimental: true,
// //   });
// //   const { setEditor } = useEditorStore();

// //   const editor = useEditor({
// //     autofocus: true,
// //     immediatelyRender: false,
// //     onCreate({ editor }) {
// //       setEditor(editor);
// //     },
// //     onDestroy() {
// //       setEditor(null);
// //     },
// //     onUpdate({ editor }) {
// //       setEditor(editor)
// //     },
// //     onSelectionUpdate({ editor }) {
// //       setEditor(editor)
// //     },
// //     onTransaction({ editor }) {
// //       setEditor(editor)
// //     },
// //     onFocus({ editor }) {
// //       setEditor(editor)
// //     },
// //     onBlur({ editor }) {
// //       setEditor(editor)
// //     },
// //     onContentError({ editor }) {
// //       setEditor(editor)
// //     },
// //     editorProps: {
// //       attributes: {
// //         style: `padding-left: ${leftMargin}px; padding-right: ${rightMargin}px;`,
// //         class: "focus:outline-none print:border-0 bg-white border border-[#C7C7C7] flex flex-col min-h-[1054px] w-[816px] pt-10 pr-14 pb-10 cursor-text"
// //       },
// //     },
// //     extensions: [
// //       liveblocks,
// //       StarterKit.configure({
// //         history: false,
// //       }),
// //       LineHeightExtension,
// //       FontSizeExtension,
// //       TextAlign.configure({
// //         types: ["heading", "paragraph"]
// //       }),
// //       Link.configure({
// //         openOnClick: false,
// //         autolink: true,
// //         defaultProtocol: "https"
// //       }),
// //       Color,
// //       Highlight.configure({
// //         multicolor: true,
// //       }),
// //       FontFamily,
// //       TextStyle,
// //       Underline,
// //       Image,
// //       ImageResize,
// //       Table,
// //       TableCell,
// //       TableHeader,
// //       TableRow,
// //       TaskItem.configure({
// //         nested: true,
// //       }),
// //       TaskList,
// //     ],
// //   })

// //   return (
// //     <div className="size-full overflow-x-auto bg-[#F9FBFD] px-4 print:p-0 print:bg-white print:overflow-visible">
// //       <Ruler />
// //       <div className="min-w-max flex justify-center w-[816px] py-4 print:py-0 mx-auto print:w-full print:min-w-0">
// //         <EditorContent editor={editor} />
// //         <Threads editor={editor} />
// //       </div>
// //     </div>
// //   );
// // };

// "use client";

// import StarterKit from '@tiptap/starter-kit'
// import TaskItem from '@tiptap/extension-task-item'
// import TaskList from '@tiptap/extension-task-list'
// import Table from '@tiptap/extension-table'
// import Image from '@tiptap/extension-image'
// import TextAlign from '@tiptap/extension-text-align'
// import Link from '@tiptap/extension-link'
// import { Color } from '@tiptap/extension-color'
// import Highlight from "@tiptap/extension-highlight"
// import FontFamily from '@tiptap/extension-font-family'
// import TextStyle from '@tiptap/extension-text-style'
// import Underline from '@tiptap/extension-underline'
// import ImageResize from "tiptap-extension-resize-image";
// import TableCell from '@tiptap/extension-table-cell'
// import TableHeader from '@tiptap/extension-table-header'
// import TableRow from '@tiptap/extension-table-row'
// import { useEditor, EditorContent } from '@tiptap/react'
// import { useLiveblocksExtension } from "@liveblocks/react-tiptap";
// import { useStorage } from '@liveblocks/react';

// import { useEditorStore } from '@/store/use-editor-store';
// import { FontSizeExtension } from '@/extensions/font-size';
// import { LineHeightExtension } from '@/extensions/line-height';
// import { LEFT_MARGIN_DEFAULT, RIGHT_MARGIN_DEFAULT } from '@/constants/margins';

// import { Ruler } from './ruler';
// import { Threads } from './threads';
// import AICopilot from '@/extensions/AICopilotEditor'; // Import your AICopilot extension

// interface EditorProps {
//   initialContent?: string | undefined;
// };

// export const Editor = ({ initialContent }: EditorProps) => {
//   const leftMargin = useStorage((root) => root.leftMargin) ?? LEFT_MARGIN_DEFAULT;
//   const rightMargin = useStorage((root) => root.rightMargin) ?? RIGHT_MARGIN_DEFAULT;

//   const liveblocks = useLiveblocksExtension({
//     initialContent,
//     offlineSupport_experimental: true,
//   });
//   const { setEditor } = useEditorStore();

//   const editor = useEditor({
//     autofocus: true,
//     immediatelyRender: false,
//     onCreate({ editor }) {
//       setEditor(editor);
//     },
//     onDestroy() {
//       setEditor(null);
//     },
//     onUpdate({ editor }) {
//       setEditor(editor)
//     },
//     onSelectionUpdate({ editor }) {
//       setEditor(editor)
//     },
//     onTransaction({ editor }) {
//       setEditor(editor)
//     },
//     onFocus({ editor }) {
//       setEditor(editor)
//     },
//     onBlur({ editor }) {
//       setEditor(editor)
//     },
//     onContentError({ editor }) {
//       setEditor(editor)
//     },
//     editorProps: {
//       attributes: {
//         style: `padding-left: ${leftMargin}px; padding-right: ${rightMargin}px;`,
//         class: "focus:outline-none print:border-0 bg-white border border-[#C7C7C7] flex flex-col min-h-[1054px] w-[816px] pt-10 pr-14 pb-10 cursor-text"
//       },
//     },
//     extensions: [
//       liveblocks,
//       StarterKit.configure({
//         history: false,
//       }),
//       LineHeightExtension,
//       FontSizeExtension,
//       TextAlign.configure({
//         types: ["heading", "paragraph"]
//       }),
//       Link.configure({
//         openOnClick: false,
//         autolink: true,
//         defaultProtocol: "https"
//       }),
//       Color,
//       Highlight.configure({
//         multicolor: true,
//       }),
//       FontFamily,
//       TextStyle,
//       Underline,
//       Image,
//       ImageResize,
//       Table,
//       TableCell,
//       TableHeader,
//       TableRow,
//       TaskItem.configure({
//         nested: true,
//       }),
//       TaskList,
//       AICopilot, // Add your AICopilot extension here
//     ],
//   })

//   return (
//     <div className="size-full overflow-x-auto bg-[#F9FBFD] px-4 print:p-0 print:bg-white print:overflow-visible">
//       <Ruler />
//       <div className="min-w-max flex justify-center w-[816px] py-4 print:py-0 mx-auto print:w-full print:min-w-0">
//         <EditorContent editor={editor} />
//         <Threads editor={editor} />
//       </div>
//     </div>
//   );
// };
// "use client";

// import StarterKit from '@tiptap/starter-kit';
// import TaskItem from '@tiptap/extension-task-item';
// import TaskList from '@tiptap/extension-task-list';
// import Table from '@tiptap/extension-table';
// import Image from '@tiptap/extension-image';
// import TextAlign from '@tiptap/extension-text-align';
// import Link from '@tiptap/extension-link';
// import { Color } from '@tiptap/extension-color';
// import Highlight from "@tiptap/extension-highlight";
// import FontFamily from '@tiptap/extension-font-family';
// import TextStyle from '@tiptap/extension-text-style';
// import Underline from '@tiptap/extension-underline';
// import ImageResize from "tiptap-extension-resize-image";
// import TableCell from '@tiptap/extension-table-cell';
// import TableHeader from '@tiptap/extension-table-header';
// import TableRow from '@tiptap/extension-table-row';
// import { useEditor, EditorContent } from '@tiptap/react';
// import { useLiveblocksExtension } from "@liveblocks/react-tiptap";
// import { useStorage } from '@liveblocks/react';
// import { useMutation } from "convex/react";
// import { toast } from "sonner";
// import { useEffect, useState } from 'react';

// import { useEditorStore } from '@/store/use-editor-store';
// import { FontSizeExtension } from '@/extensions/font-size';
// import { LineHeightExtension } from '@/extensions/line-height';
// import { LEFT_MARGIN_DEFAULT, RIGHT_MARGIN_DEFAULT } from '@/constants/margins';
// import { api } from "../../../../convex/_generated/api";
// import { Ruler } from './ruler';
// import { Threads } from './threads';

// interface EditorProps {
//   initialContent?: string | undefined;
//   documentId: string;
// }

// interface Version {
//   _id: any;
//   _creationTime: number;
//   content: string;
//   title: string;
//   documentId: any;
//   createdAt: Date;
// }

// export const Editor = ({ initialContent, documentId }: EditorProps) => {
//   const leftMargin = useStorage((root) => root.leftMargin) ?? LEFT_MARGIN_DEFAULT;
//   const rightMargin = useStorage((root) => root.rightMargin) ?? RIGHT_MARGIN_DEFAULT;

//   const liveblocks = useLiveblocksExtension({
//     initialContent,
//     offlineSupport_experimental: true,
//   });
//   const { setEditor } = useEditorStore();

//   const editor = useEditor({
//     autofocus: true,
//     immediatelyRender: false,
//     onCreate({ editor }) {
//       setEditor(editor);
//     },
//     onDestroy() {
//       setEditor(null);
//     },
//     onUpdate({ editor }) {
//       setEditor(editor);
//     },
//     onSelectionUpdate({ editor }) {
//       setEditor(editor);
//     },
//     onTransaction({ editor }) {
//       setEditor(editor);
//     },
//     onFocus({ editor }) {
//       setEditor(editor);
//     },
//     onBlur({ editor }) {
//       setEditor(editor);
//     },
//     onContentError({ editor }) {
//       setEditor(editor);
//     },
//     editorProps: {
//       attributes: {
//         style: `padding-left: ${leftMargin}px; padding-right: ${rightMargin}px;`,
//         class: "focus:outline-none print:border-0 bg-white border border-[#C7C7C7] flex flex-col min-h-[1054px] w-[816px] pt-10 pr-14 pb-10 cursor-text"
//       },
//     },
//     extensions: [
//       liveblocks,
//       StarterKit.configure({
//         history: false,
//       }),
//       LineHeightExtension,
//       FontSizeExtension,
//       TextAlign.configure({
//         types: ["heading", "paragraph"]
//       }),
//       Link.configure({
//         openOnClick: false,
//         autolink: true,
//         defaultProtocol: "https"
//       }),
//       Color,
//       Highlight.configure({
//         multicolor: true,
//       }),
//       FontFamily,
//       TextStyle,
//       Underline,
//       Image,
//       ImageResize,
//       Table,
//       TableCell,
//       TableHeader,
//       TableRow,
//       TaskItem.configure({
//         nested: true,
//       }),
//       TaskList,
//     ],
//   });

//   const [versions, setVersions] = useState<Version[] | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<any>(null);

//   useEffect(() => {
//     if (documentId) {
//       setLoading(true);
//       setError(null);
//       api.documents.getVersions({ id: documentId })
//         .then((data) => {
//           setVersions(data);
//           setLoading(false);
//         })
//         .catch((err) => {
//           setError(err);
//           setLoading(false);
//         });
//     } else {
//       setLoading(false);
//     }
//   }, [documentId]);

//   const restoreVersionMutation = useMutation(api.documents.restoreVersion);

//   const handleRestoreVersion = async (versionId: string) => {
//     try {
//       await restoreVersionMutation({ documentId, versionId });
//       toast.success("Version restored successfully!");

//       const updatedDocument = await api.documents.getById({ id: documentId });
//       if (updatedDocument && editor) {
//         editor.commands.setContent(updatedDocument.content);
//       }
//     } catch (err) {
//       console.error(err);
//       toast.error("Failed to restore version");
//     }
//   };

//   if (loading) {
//     return <div>Loading versions...</div>;
//   }

//   if (error) {
//     console.error("Error fetching versions:", error);
//     return <div>Error fetching document versions</div>;
//   }

//   return (
//     <div className="size-full overflow-x-auto bg-[#F9FBFD] px-4 print:p-0 print:bg-white print:overflow-visible">
//       <Ruler />
//       <div className="min-w-max flex justify-center w-[816px] py-4 print:py-0 mx-auto print:w-full print:min-w-0">
//         <EditorContent editor={editor} />
//         <Threads editor={editor} />
//       </div>

//       <div className="versioning-section">
//         <h3>Document Versions</h3>
//         <ul>
//           {
//           versions &&
//           versions.map((version) => (
//             <li key={version._id}>
//               <div>
//                 <strong>{version.title}</strong>
//                 <p>{version.createdAt.toLocaleString()}</p>
//                 <button
//                   onClick={() => handleRestoreVersion(version._id)}
//                   className="restore-button"
//                 >
//                   Restore
//                 </button>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// works

// "use client";

// import StarterKit from '@tiptap/starter-kit';
// import TaskItem from '@tiptap/extension-task-item';
// import TaskList from '@tiptap/extension-task-list';
// import Table from '@tiptap/extension-table';
// import Image from '@tiptap/extension-image';
// import TextAlign from '@tiptap/extension-text-align';
// import Link from '@tiptap/extension-link';
// import { Color } from '@tiptap/extension-color';
// import Highlight from "@tiptap/extension-highlight";
// import FontFamily from '@tiptap/extension-font-family';
// import TextStyle from '@tiptap/extension-text-style';
// import Underline from '@tiptap/extension-underline';
// import ImageResize from "tiptap-extension-resize-image";
// import TableCell from '@tiptap/extension-table-cell';
// import TableHeader from '@tiptap/extension-table-header';
// import TableRow from '@tiptap/extension-table-row';
// import { useEditor, EditorContent } from '@tiptap/react';
// import { useLiveblocksExtension } from "@liveblocks/react-tiptap";
// import { useStorage } from '@liveblocks/react';
// import { useMutation } from "convex/react";
// import { toast } from "sonner";
// import { useEffect, useState } from 'react';
// import { ConvexHttpClient } from "convex/browser";
// import { usePathname } from 'next/navigation';

// import { useEditorStore } from '@/store/use-editor-store';
// import { FontSizeExtension } from '@/extensions/font-size';
// import { LineHeightExtension } from '@/extensions/line-height';
// import { LEFT_MARGIN_DEFAULT, RIGHT_MARGIN_DEFAULT } from '@/constants/margins';
// import { api } from "../../../../convex/_generated/api";
// import { Ruler } from './ruler';
// import { Threads } from './threads';

// interface EditorProps {
//   initialContent?: string | undefined;
//   documentId?: string;
// }

// interface Version {
//   _id: any;
//   _creationTime: number;
//   content: string;
//   title: string;
//   documentId: any;
//   createdAt: number;
// }

// const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

// export const Editor = ({ initialContent, documentId: propDocumentId }: EditorProps) => {
//   const leftMargin = useStorage((root) => root.leftMargin) ?? LEFT_MARGIN_DEFAULT;
//   const rightMargin = useStorage((root) => root.rightMargin) ?? RIGHT_MARGIN_DEFAULT;

//   const liveblocks = useLiveblocksExtension({
//     initialContent,
//     offlineSupport_experimental: true,
//   });
//   const { setEditor } = useEditorStore();
//   const pathname = usePathname();
//   const [documentId, setDocumentId] = useState<string | null>(null);

//   useEffect(() => {
//     if (propDocumentId) {
//       setDocumentId(propDocumentId);
//     } else {
//       const match = pathname.match(/\/documents\/([a-zA-Z0-9]+)/);
//       if (match && match[1]) {
//         setDocumentId(match[1]);
//       } else {
//         setDocumentId(null);
//       }
//     }
//   }, [pathname, propDocumentId]);

//   const editor = useEditor({
//     autofocus: true,
//     immediatelyRender: false,
//     onCreate({ editor }) {
//       setEditor(editor);
//     },
//     onDestroy() {
//       setEditor(null);
//     },
//     onUpdate({ editor }) {
//       setEditor(editor);
//     },
//     onSelectionUpdate({ editor }) {
//       setEditor(editor);
//     },
//     onTransaction({ editor }) {
//       setEditor(editor);
//     },
//     onFocus({ editor }) {
//       setEditor(editor);
//     },
//     onBlur({ editor }) {
//       setEditor(editor);
//     },
//     onContentError({ editor }) {
//       setEditor(editor);
//     },
//     editorProps: {
//       attributes: {
//         style: `padding-left: ${leftMargin}px; padding-right: ${rightMargin}px;`,
//         class: "focus:outline-none print:border-0 bg-white border border-[#C7C7C7] flex flex-col min-h-[1054px] w-[816px] pt-10 pr-14 pb-10 cursor-text"
//       },
//     },
//     extensions: [
//       liveblocks,
//       StarterKit.configure({
//         history: false,
//       }),
//       LineHeightExtension,
//       FontSizeExtension,
//       TextAlign.configure({
//         types: ["heading", "paragraph"]
//       }),
//       Link.configure({
//         openOnClick: false,
//         autolink: true,
//         defaultProtocol: "https"
//       }),
//       Color,
//       Highlight.configure({
//         multicolor: true,
//       }),
//       FontFamily,
//       TextStyle,
//       Underline,
//       Image,
//       ImageResize,
//       Table,
//       TableCell,
//       TableHeader,
//       TableRow,
//       TaskItem.configure({
//         nested: true,
//       }),
//       TaskList,
//     ],
//   });

//   const [versions, setVersions] = useState<Version[] | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<any>(null);

//   useEffect(() => {
//     setVersions(null);
//     console.log("Editor: useEffect running with documentId:", documentId);
//     if (documentId) {
//       setLoading(true);
//       setError(null);
//       console.log("Document ID:", documentId);
//       convex.query(api.documents.getVersions, { id: documentId })
//         .then((data) => {
//           console.log("Data from Convex:", data);
//           setVersions(data);
//           setLoading(false);
//         })
//         .catch((err) => {
//           console.error("Editor: Error fetching versions:", err);
//           setError(err);
//           setVersions([]);
//           setLoading(false);
//         });
//     } else {
//       setLoading(false);
//     }
//   }, [documentId]);

//   const restoreVersionMutation = useMutation(api.documents.restoreVersion);
//   const updateByIdMutation = useMutation(api.documents.updateById);

//   const handleRestoreVersion = async (versionId: string) => {
//     try {
//         await restoreVersionMutation({ documentId, versionId });
//         toast.success("Version restored successfully!");

//         const updatedDocument = await convex.query(api.documents.getById, { id: documentId });

//         if (updatedDocument && editor) {
//             editor.commands.setContent(updatedDocument.initialContent); // Set HTML
//         }
//     } catch (err) {
//         console.error(err);
//         toast.error("Failed to restore version");
//     }
// };
//   const handleSave = async () => {
//     if (!editor || !documentId) return;

//     const content = editor.getHTML(); // Get HTML content
//     console.log("Editor Content (HTML):", content);

//     try {
//         await updateByIdMutation({
//             id: documentId,
//             title:
//             content: content, // Store HTML
//         });
//         toast.success("Document saved");
//     } catch (error) {
//         toast.error("Failed to save document");
//         console.error(error);
//     }
// };

//   if (loading) {
//     return <div className="p-4">Loading versions...</div>;
//   }

//   if (error) {
//     return <div className="p-4 text-red-500">Error fetching document versions</div>;
//   }

//   if (!versions) {
//     return <div className="p-4">No versions found.</div>;
//   }

//   return (
//     <div className="size-full overflow-x-auto bg-[#F9FBFD] px-4 print:p-0 print:bg-white print:overflow-visible">
//       <Ruler />
//       <div className="min-w-max flex justify-center w-[816px] py-4 print:py-0 mx-auto print:w-full print:min-w-0">
//         <EditorContent editor={editor} />
//         <Threads editor={editor} />
//       </div>
//       <button onClick={handleSave} className="bg-blue-500 hover:bg-blue-600 text-white rounded-md px-3 py-1 text-sm">
//     Save
// </button>

//       <div className="mt-6 p-4 border rounded-md shadow-sm">
//         <h3 className="text-lg font-semibold mb-4">Document Versions</h3>
//         <ul className="space-y-2">
//           {versions && versions.map((version) => (
//             <li key={version._id} className="border rounded-md p-3">
//               <div className="flex justify-between items-center">
//                 <div>
//                   <strong className="block">{version.title}</strong>
//                   <p className="text-sm text-gray-500">{new Date(version.createdAt).toLocaleString()}</p>
//                 </div>
//                 <button
//                   onClick={() => handleRestoreVersion(version._id)}
//                   className="bg-blue-500 hover:bg-blue-600 text-white rounded-md px-3 py-1 text-sm">
//                   Restore
//                 </button>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// "use client";

// import StarterKit from '@tiptap/starter-kit';
// import TaskItem from '@tiptap/extension-task-item';
// import TaskList from '@tiptap/extension-task-list';
// import Table from '@tiptap/extension-table';
// import Image from '@tiptap/extension-image';
// import TextAlign from '@tiptap/extension-text-align';
// import Link from '@tiptap/extension-link';
// import { Color } from '@tiptap/extension-color';
// import Highlight from "@tiptap/extension-highlight";
// import FontFamily from '@tiptap/extension-font-family';
// import TextStyle from '@tiptap/extension-text-style';
// import Underline from '@tiptap/extension-underline';
// import ImageResize from "tiptap-extension-resize-image";
// import TableCell from '@tiptap/extension-table-cell';
// import TableHeader from '@tiptap/extension-table-header';
// import TableRow from '@tiptap/extension-table-row';
// import { useEditor, EditorContent } from '@tiptap/react';
// import { useLiveblocksExtension } from "@liveblocks/react-tiptap";
// import { useStorage } from '@liveblocks/react';
// import { useMutation, useQuery } from "convex/react";
// import { toast } from "sonner";
// import { useEffect, useState } from 'react';
// import { ConvexHttpClient } from "convex/browser";
// import { usePathname } from 'next/navigation';

// import { useEditorStore } from '@/store/use-editor-store';
// import { FontSizeExtension } from '@/extensions/font-size';
// import { LineHeightExtension } from '@/extensions/line-height';
// import { LEFT_MARGIN_DEFAULT, RIGHT_MARGIN_DEFAULT } from '@/constants/margins';
// import { api } from "../../../../convex/_generated/api";
// import { Ruler } from './ruler';
// import { Threads } from './threads';
// import { DocumentInput } from "./document-input"; // Import DocumentInput

// interface EditorProps {
//   initialContent?: string | undefined;
//   documentId?: string;
// }

// interface Version {
//   _id: any;
//   _creationTime: number;
//   content: string;
//   title: string;
//   documentId: any;
//   createdAt: number;
// }

// const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

// export const Editor = ({ initialContent, documentId: propDocumentId }: EditorProps) => {
//   const leftMargin = useStorage((root) => root.leftMargin) ?? LEFT_MARGIN_DEFAULT;
//   const rightMargin = useStorage((root) => root.rightMargin) ?? RIGHT_MARGIN_DEFAULT;

//   const liveblocks = useLiveblocksExtension({
//     initialContent,
//     offlineSupport_experimental: true,
//   });
//   const { setEditor } = useEditorStore();
//   const pathname = usePathname();
//   const [documentId, setDocumentId] = useState<string | null>(null);

//   useEffect(() => {
//     if (propDocumentId) {
//       setDocumentId(propDocumentId);
//     } else {
//       const match = pathname.match(/\/documents\/([a-zA-Z0-9]+)/);
//       if (match && match[1]) {
//         setDocumentId(match[1]);
//       } else {
//         setDocumentId(null);
//       }
//     }
//   }, [pathname, propDocumentId]);

//   const editor = useEditor({
//     autofocus: true,
//     immediatelyRender: false,
//     onCreate({ editor }) {
//       setEditor(editor);
//     },
//     onDestroy() {
//       setEditor(null);
//     },
//     onUpdate({ editor }) {
//       setEditor(editor);
//     },
//     onSelectionUpdate({ editor }) {
//       setEditor(editor);
//     },
//     onTransaction({ editor }) {
//       setEditor(editor);
//     },
//     onFocus({ editor }) {
//       setEditor(editor);
//     },
//     onBlur({ editor }) {
//       setEditor(editor);
//     },
//     onContentError({ editor }) {
//       setEditor(editor);
//     },
//     editorProps: {
//       attributes: {
//         style: `padding-left: ${leftMargin}px; padding-right: ${rightMargin}px;`,
//         class: "focus:outline-none print:border-0 bg-white border border-[#C7C7C7] flex flex-col min-h-[1054px] w-[816px] pt-10 pr-14 pb-10 cursor-text"
//       },
//     },
//     extensions: [
//       liveblocks,
//       StarterKit.configure({
//         history: false,
//       }),
//       LineHeightExtension,
//       FontSizeExtension,
//       TextAlign.configure({
//         types: ["heading", "paragraph"]
//       }),
//       Link.configure({
//         openOnClick: false,
//         autolink: true,
//         defaultProtocol: "https"
//       }),
//       Color,
//       Highlight.configure({
//         multicolor: true,
//       }),
//       FontFamily,
//       TextStyle,
//       Underline,
//       Image,
//       ImageResize,
//       Table,
//       TableCell,
//       TableHeader,
//       TableRow,
//       TaskItem.configure({
//         nested: true,
//       }),
//       TaskList,
//     ],
//   });

//   const [versions, setVersions] = useState<Version[] | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<any>(null);

//   useEffect(() => {
//     setVersions(null);
//     console.log("Editor: useEffect running with documentId:", documentId);
//     if (documentId) {
//       setLoading(true);
//       setError(null);
//       console.log("Document ID:", documentId);
//       convex.query(api.documents.getVersions, { id: documentId })
//         .then((data) => {
//           console.log("Data from Convex:", data);
//           setVersions(data);
//           setLoading(false);
//         })
//         .catch((err) => {
//           console.error("Editor: Error fetching versions:", err);
//           setError(err);
//           setVersions([]);
//           setLoading(false);
//         });
//     } else {
//       setLoading(false);
//     }
//   }, [documentId]);

//   const restoreVersionMutation = useMutation(api.documents.restoreVersion);
//   const updateByIdMutation = useMutation(api.documents.updateById);
//   const document = useQuery(api.documents.getById, { id: documentId });

//   const handleRestoreVersion = async (versionId: string) => {
//     try {
//       await restoreVersionMutation({ documentId, versionId });
//       toast.success("Version restored successfully!");

//       const updatedDocument = await convex.query(api.documents.getById, { id: documentId });

//       if (updatedDocument && editor) {
//         editor.commands.setContent(updatedDocument.initialContent);
//       }
//     } catch (err) {
//       console.error(err);
//       toast.error("Failed to restore version");
//     }
//   };

//   const handleSave = async () => {
//     if (!editor || !documentId) return;

//     const content = editor.getHTML();
//     console.log("Editor Content (HTML):", content);

//     try {
//       await updateByIdMutation({
//         id: documentId,
//         title: document?.title || "Document",
//         content: content,
//       });
//       toast.success("Document saved");
//     } catch (error) {
//       toast.error("Failed to save document");
//       console.error(error);
//     }
//   };

//   if (loading) {
//     return <div className="p-4">Loading versions...</div>;
//   }

//   if (error) {
//     return <div className="p-4 text-red-500">Error fetching document versions</div>;
//   }

//   if (!versions) {
//     return <div className="p-4">No versions found.</div>;
//   }

//   return (
//     <div className="size-full overflow-x-auto bg-[#F9FBFD] px-4 print:p-0 print:bg-white print:overflow-visible">
//       <Ruler />
//       <div className="min-w-max flex justify-center w-[816px] py-4 print:py-0 mx-auto print:w-full print:min-w-0">
//         <EditorContent editor={editor} />
//         <Threads editor={editor} />
//       </div>

//        <button onClick={handleSave} className="bg-blue-500 hover:bg-blue-600 text-white rounded-md px-3 py-1 text-sm">
//      Save
//  </button>

//       <div className="mt-6 p-4 border rounded-md shadow-sm">
//         <h3 className="text-lg font-semibold mb-4">Document Versions</h3>
//         <ul className="space-y-2">
//           {versions && versions.map((version) => (
//             <li key={version._id} className="border rounded-md p-3">
//               <div className="flex justify-between items-center">
//                 <div>
//                   <strong className="block">{version.title}</strong>
//                   <p className="text-sm text-gray-500">{new Date(version.createdAt).toLocaleString()}</p>
//                 </div>
//                 <button
//                   onClick={() => handleRestoreVersion(version._id)}
//                   className="bg-blue-500 hover:bg-blue-600 text-white rounded-md px-3 py-1 text-sm"
//                 >
//                   Restore
//                 </button>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

"use client";

import StarterKit from "@tiptap/starter-kit";
import TaskItem from "@tiptap/extension-task-item";
import TaskList from "@tiptap/extension-task-list";
import Table from "@tiptap/extension-table";
import Image from "@tiptap/extension-image";
import TextAlign from "@tiptap/extension-text-align";
import Link from "@tiptap/extension-link";
import { Color } from "@tiptap/extension-color";
import Highlight from "@tiptap/extension-highlight";
import FontFamily from "@tiptap/extension-font-family";
import TextStyle from "@tiptap/extension-text-style";
import Underline from "@tiptap/extension-underline";
import ImageResize from "tiptap-extension-resize-image";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";
import TableRow from "@tiptap/extension-table-row";
import { useEditor, EditorContent } from "@tiptap/react";
import { useLiveblocksExtension } from "@liveblocks/react-tiptap";
import { useStorage } from "@liveblocks/react";
import { useEditorStore } from "@/store/use-editor-store";
import { FontSizeExtension } from "@/extensions/font-size";
import { LineHeightExtension } from "@/extensions/line-height";
import { LEFT_MARGIN_DEFAULT, RIGHT_MARGIN_DEFAULT } from "@/constants/margins";
import { Ruler } from "./ruler";
import { Threads } from "./threads";
import { useCallback, useEffect, useRef, useState } from "react";
import { Editor as TiptapEditor } from "@tiptap/react";
import { usePathname } from "next/navigation";
import { api } from "../../../../convex/_generated/api";
import { useMutation, useQuery } from "convex/react";
import { toast } from "sonner";
import { DocumentInput } from "./document-input";
import { ConvexHttpClient } from "convex/browser";
import { franc } from "franc";

interface EditorProps {
  initialContent?: string | undefined;
  documentId?: string;
}

interface Version {
  _id: any;
  _creationTime: number;
  content: string;
  title: string;
  documentId: any;
  createdAt: number;
}

const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export const Editor = ({
  initialContent,
  documentId: propDocumentId,
}: EditorProps) => {
  const pathname = usePathname();
  const [documentId, setDocumentId] = useState<string | null>(() => {
    if (propDocumentId) {
      return propDocumentId;
    } else {
      const match = pathname.match(/\/documents\/([a-zA-Z0-9]+)/);
      if (match && match[1]) {
        return match[1];
      }
      return null;
    }
  });

  const leftMargin =
    useStorage((root) => root.leftMargin) ?? LEFT_MARGIN_DEFAULT;
  const rightMargin =
    useStorage((root) => root.rightMargin) ?? RIGHT_MARGIN_DEFAULT;
  const liveblocks = useLiveblocksExtension({
    initialContent,
    offlineSupport_experimental: true,
  });
  const { setEditor } = useEditorStore();
  const [suggestion, setSuggestion] = useState<string | null>(null);
  const [typingTimeout, setTypingTimeout] = useState<NodeJS.Timeout | null>(
    null
  );
  const [versions, setVersions] = useState<Version[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);
  const restoreVersionMutation = useMutation(api.documents.restoreVersion);
  const updateByIdMutation = useMutation(api.documents.updateById);
  const document = useQuery(api.documents.getById, { id: documentId });
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [pitch, setPitch] = useState(1.5);
  const [rate, setRate] = useState(0.9);
  const [isHovered, setIsHovered] = useState(false);
  const [chatMessages, setChatMessages] = useState<
    { sender: string; text: string }[]
  >([]);
  const [userInput, setUserInput] = useState<string>("");

  const [selectedVoice, setSelectedVoice] = useState(
    "Google UK English Female"
  );
  const [selectedLanguage, setSelectedLanguage] = useState("es");
  const [isSpeaking, setIsSpeaking] = useState(false);

  useEffect(() => {
    const fetchVersions = async () => {
      setVersions(null);
      console.log("Editor: useEffect running with documentId:", documentId);
      if (documentId) {
        setLoading(true);
        setError(null);
        console.log("Document ID:", documentId);
        try {
          const data = await convex.query(api.documents.getVersions, {
            id: documentId,
          });
          console.log("Data from Convex:", data);
          setVersions(data);
          setLoading(false);
        } catch (err) {
          console.error("Editor: Error fetching versions:", err);
          setError(err);
          setVersions([]);
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    };

    fetchVersions();
  }, [documentId]);

  const getGeminiSuggestion = async (
    text: string,
    promptExtension = ""
  ): Promise<string | null> => {
    try {
      const response = await fetch("/api/gemini", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: promptExtension + text }),
      });
      const data = await response.json();
      return data.result;
    } catch (error) {
      console.error("Error fetching Gemini suggestion:", error);
      return null;
    }
  };

  const correctGrammarAndReplace = async () => {
    if (editor && editor.getText()) {
      const textToCorrect = editor.getText();
      const promptExtension =
        "Correct the grammar and spelling in the following text. Do not change the original formatting, structure, or meaning. Only correct errors. Return the corrected text: no extra text";
      const correctedText = await getGeminiSuggestion(
        textToCorrect,
        promptExtension
      );
      if (correctedText) {
        editor.commands.setContent(correctedText);
      }
    }
  };

  const editor: TiptapEditor | null = useEditor({
    autofocus: true,
    immediatelyRender: false,
    onCreate({ editor }) {
      setEditor(editor);
    },
    onDestroy() {
      setEditor(null);
    },
    onUpdate({ editor }) {
      setEditor(editor);
      if (typingTimeout) {
        clearTimeout(typingTimeout);
      }
      setTypingTimeout(
        setTimeout(async () => {
          const selectedText = editor.getText();
          if (selectedText) {
            const geminiSuggestion = await getGeminiSuggestion(selectedText);
            setSuggestion(geminiSuggestion);
          } else {
            setSuggestion(null);
          }
        }, 1000)
      );
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
    editorProps: {
      attributes: {
        style: `padding-left: ${leftMargin}px; padding-right: ${rightMargin}px;`,
        class:
          "focus:outline-none print:border-0 bg-white border border-[#C7C7C7] flex flex-col min-h-[1054px] w-[816px] pt-10 pr-14 pb-10 cursor-text",
      },
    },
    extensions: [
      liveblocks,
      StarterKit.configure({ history: false }),
      LineHeightExtension,
      FontSizeExtension,
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      Link.configure({
        openOnClick: false,
        autolink: true,
        defaultProtocol: "https",
      }),
      Color,
      Highlight.configure({ multicolor: true }),
      FontFamily,
      TextStyle,
      Underline,
      Image,
      ImageResize,
      Table,
      TableCell,
      TableHeader,
      TableRow,
      TaskItem.configure({ nested: true }),
      TaskList,
    ],
  });

  // Function to send user input to the chatbot API
  const sendChatbotMessage = async (message: string, editorContent: string) => {
    try {
      const response = await fetch("/api/chatbot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message, editorContent }), // Send editor content
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      const data = await response.json();
      return data.reply || "Sorry, I couldn't understand that.";
    } catch (error) {
      console.error("Error fetching chatbot response:", error);
      return "Error connecting to chatbot.";
    }
  };

  const getEditorContent = () => {
    if (editor && typeof editor.getText === "function") {
      return editor.getText(); // Return the actual content
    }
    return "Document is empty"; // Fallback if editor is not loaded
  };

  const handleSendMessage = async () => {
    if (!userInput.trim()) return;

    const editorContent = getEditorContent(); // Fetch editor content
    const newMessages = [...chatMessages, { sender: "user", text: userInput }];
    setChatMessages(newMessages);
    setUserInput("");

    const botReply = await sendChatbotMessage(userInput, editorContent); // Pass editorContent
    if (botReply) {
      setChatMessages([...newMessages, { sender: "bot", text: botReply }]);
    }
  };
  
  const autocompleteText = useCallback(async () => {
    if (!editor || !editor.getText()) return;

    const currentText = editor.getText();
    const promptExtension =
      "Complete the last line of the paragraph,if line already complete add 1 line to conclude, just give text and no extra characters or symbols.";

    const completedText = await getGeminiSuggestion(
      currentText,
      promptExtension
    );

    if (!completedText) return;

    let index = 0;

    const typeCharacter = () => {
      if (index < completedText.length) {
        editor.commands.insertContent(completedText[index]); // Insert one character at a time
        index++;
        console.log(
          `Typing character: ${completedText[index - 1]}, index: ${index}`
        );
        setTimeout(typeCharacter, 1); // Adjust typing speed here (1ms per character)
      }
    };

    typeCharacter(); // Start the typing animation
  }, [editor, getGeminiSuggestion]); //Add getGeminiSuggestion to dependencies.

  const autocompleteTextRef = useRef(autocompleteText);

  useEffect(() => {
    autocompleteTextRef.current = autocompleteText;
  }, [autocompleteText]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.shiftKey && event.key === "Tab") {
        event.preventDefault();

        const handleAKeyDown = (e: KeyboardEvent) => {
          if (e.key.toLowerCase() === "a") {
            e.preventDefault();
            if (autocompleteTextRef.current) {
              autocompleteTextRef.current(); // Now it has the correct reference
            }
          }
          if (window.document) {
            window.document.removeEventListener("keydown", handleAKeyDown);
          }
        };

        if (window.document) {
          window.document.addEventListener("keydown", handleAKeyDown, {
            once: true,
          });
        }
      }
    };

    if (window.document) {
      window.document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      if (window.document) {
        window.document.removeEventListener("keydown", handleKeyDown);
      }
    };
  }, [autocompleteTextRef]);

  const handleRestoreVersion = async (versionId: string) => {
    try {
      await restoreVersionMutation({ documentId, versionId });
      toast.success("Version restored successfully!");

      const updatedDocument = await convex.query(api.documents.getById, {
        id: documentId,
      });

      if (updatedDocument && editor) {
        editor.commands.setContent(updatedDocument.initialContent);
      }
    } catch (err) {
      console.error(err);
      toast.error("Failed to restore version");
    }
  };

  const handleSave = async () => {
    if (!editor || !documentId) return;

    const content = editor.getHTML();
    console.log("Editor Content (HTML):", content);

    try {
      await updateByIdMutation({
        id: documentId,
        title: document?.title || "Document",
        content: content,
      });
      toast.success("Document saved");
    } catch (error) {
      toast.error("Failed to save document");
      console.error(error);
    }
  };

  if (loading) {
    return <div className="p-4">Loading versions...</div>;
  }

  if (error) {
    return (
      <div className="p-4 text-red-500">Error fetching document versions</div>
    );
  }

  if (!versions) {
    return <div className="p-4">No versions found.</div>;
  }

  const toggleSuggestions = () => {
    setShowSuggestions(!showSuggestions);
    console.log("suggestion clicked");
  };

  const speakText = () => {
    if (editor) {
      const textToSpeak = editor.getText();
      if (textToSpeak) {
        const utterance = new SpeechSynthesisUtterance(textToSpeak);

        const selectedVoiceObj = speechSynthesis
          .getVoices()
          .find((v) => v.name === selectedVoice);

        if (selectedVoiceObj) {
          utterance.voice = selectedVoiceObj;
        }

        utterance.pitch = pitch;
        utterance.rate = rate;
        setIsSpeaking(true);

        speechSynthesis.speak(utterance);

        // utterance.onend = () => {
        //   setIsSpeaking(false); // Reset speaking state when finished
        // };
      }
    }
  };

  const stopSpeaking = () => {
    speechSynthesis.cancel();
    setIsSpeaking(false);
  };

  const translateText = async () => {
    if (!editor) return;

    const { from, to } = editor.state.selection;
    const selectedText = editor.state.doc.textBetween(from, to, "\n");

    if (!selectedText) {
      alert("Please select text to translate!");
      return;
    }

    try {
      const response = await fetch("/api/translate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text: selectedText,
          targetLang: selectedLanguage,
        }),
      });

      const data = await response.json();
      if (data.translatedText) {
        editor
          .chain()
          .focus()
          .deleteRange({ from, to })
          .insertContentAt(from, data.translatedText)
          .run();
      }
    } catch (error) {
      console.error("Translation error:", error);
    }
  };

  return (
    <div className="size-full overflow-x-auto bg-gradient-to-r from-[#fafafa] to-[#fefefe] px-4 print:p-0 print:bg-white print:overflow-visible">
      <Ruler />
      <button
        onClick={correctGrammarAndReplace}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="h-[30px] bg-blue-500 rounded w-[90px] mt-[-35px] ml-[-10px] text-white"
      >
        {isHovered ? "🛠️" : "Quick Fix"}
      </button>
      <button
        onClick={toggleSuggestions}
        className="h-[30px] bg-yellow-500 rounded w-[120px] mt-[-35px] ml-[10px] text-white"
      >
        ✨AI Suggest
      </button>
      <button
        onClick={autocompleteText}
        className="h-[30px] bg-purple-500 rounded w-[100px] mt-[-35px] ml-[10px] text-white"
      >
        Magic Fill
      </button>
      <button
        onClick={speakText}
        className="h-[30px] bg-green-500 rounded w-[120px] mt-[-35px] ml-[880px] text-white"
      >
        Speak 🔊
      </button>
      <button
        onClick={stopSpeaking}
        className="h-[30px] bg-red-500 rounded w-[120px] mt-[-35px] ml-[10px] text-white"
      >
        Stop ⏹️
      </button>
      <button
        onClick={translateText}
        className="h-[30px] bg-orange-500 rounded w-[120px] mt-[10px] ml-[20px] text-white"
      >
        Translate
      </button>
      <select
        value={selectedLanguage}
        onChange={(e) => setSelectedLanguage(e.target.value)}
        className="h-[30px] bg-teal-500 rounded w-[120px] mt-[-35px] ml-[10px] text-white"
      >
        <option value="es">Spanish</option>
        <option value="fr">French</option>
        <option value="de">German</option>
        <option value="hi">Hindi</option>
        <option value="zh">Chinese</option>
      </select>
      {/* Pitch Dropdown */}
      <select
        value={pitch}
        onChange={(e) => setPitch(parseFloat(e.target.value))}
        className="h-[30px] bg-purple-500 rounded w-[100px] mt-[-35px] ml-[895px] text-white p-1"
      >
        <option value="0.5">Pitch: 0.5</option>
        <option value="0.6">Pitch: 0.6</option>
        <option value="0.7">Pitch: 0.7</option>
        <option value="0.8">Pitch: 0.8</option>
        <option value="0.9">Pitch: 0.9</option>
        <option value="1">Pitch: 1.0</option>
        <option value="1.1">Pitch: 1.1</option>
        <option value="1.2">Pitch: 1.2</option>
        <option value="1.3">Pitch: 1.3</option>
        <option value="1.4">Pitch: 1.4</option>
        <option value="1.5">Pitch: 1.5</option>
        <option value="2">Pitch: 2.0</option>
      </select>
      {/* Rate Dropdown */}
      <select
        value={rate}
        onChange={(e) => setRate(parseFloat(e.target.value))}
        className="h-[30px] bg-yellow-500 rounded w-[100px] mt-[-35px] ml-[10px] text-white p-1"
      >
        <option value="0.5">Rate: 0.5</option>
        <option value="0.6">Rate: 0.6</option>
        <option value="0.7">Rate: 0.7</option>
        <option value="0.8">Rate: 0.8</option>
        <option value="0.9">Rate: 0.9</option>
        <option value="1">Rate: 1.0</option>
        <option value="1.1">Rate: 1.1</option>
        <option value="1.2">Rate: 1.2</option>
        <option value="1.3">Rate: 1.3</option>
        <option value="1.4">Rate: 1.4</option>
        <option value="1.5">Rate: 1.5</option>
      </select>
      <select
        value={selectedVoice}
        onChange={(e) => setSelectedVoice(e.target.value)}
        className="h-[30px] bg-blue-500 rounded w-[100px] mt-[-35px] ml-[10px] text-white p-1"
      >
        <option value="Google UK English Female">
          Google UK English Female (en-GB)
        </option>
        <option value="Google UK English Male">
          Google UK English Male (en-GB)
        </option>
        <option value="Google US English">Google US English (en-US)</option>
        <option value="Google Deutsch">Google Deutsch (de-DE)</option>
        <option value="Google Español">Google Español (es-ES)</option>
        <option value="Google Français">Google Français (fr-FR)</option>
        <option value="Google Italiano">Google Italiano (it-IT)</option>
        <option value="Google 日本語">Google 日本語 (ja-JP)</option>
        <option value="Google 한국의">Google 한국의 (ko-KR)</option>
        <option value="Google हिन्दी">Google हिन्दी (hi-IN)</option>
        <option value="Google 普通话 (中国大陆)">Google 普通话 (zh-CN)</option>
      </select>
      <div className="relative min-w-max flex justify-center w-[816px] py-4 print:py-0 mx-auto print:w-full print:min-w-0">
        {/* Editor Content */}
        <EditorContent editor={editor} className="ml-[0px]" />

        {/* Threads */}
        <Threads editor={editor} />
      </div>
      <button
        onClick={handleSave}
        className="bg-blue-500 hover:bg-blue-600 text-white rounded-md px-3 py-1 text-[20px]"
      >
        Save
      </button>
      <div className="mt-6 p-4 border rounded-md shadow-sm">
        <h3 className="text-lg font-semibold mb-4">Document Versions</h3>
        <ul className="space-y-2">
          {versions &&
            versions.map((version) => (
              <li key={version._id} className="border rounded-md p-3">
                <div className="flex justify-between items-center">
                  <div>
                    <strong className="block">{version.title}</strong>
                    <p className="text-sm text-gray-500">
                      {new Date(version.createdAt).toLocaleString()}
                    </p>
                  </div>
                  <button
                    onClick={() => handleRestoreVersion(version._id)}
                    className="bg-blue-500 hover:bg-blue-600 text-white rounded-md px-3 py-1 text-sm"
                  >
                    Restore
                  </button>
                </div>
              </li>
            ))}
        </ul>
      </div>
      {/* Suggestions Box (Placed Outside) */}
      {showSuggestions && suggestion && (
        <div className="absolute top-0 right-0 mt-[220px] mr-[40px] p-2 border rounded max-w-[280px] max-h-[450px] overflow-y-auto w-full bg-gray-100 text-black whitespace-pre-wrap break-words overflow-hidden shadow-md">
          <pre className="whitespace-pre-wrap break-words">{suggestion}</pre>
        </div>
      )}
      {isSpeaking && (
        <img
          src="https://i.pinimg.com/originals/54/58/a1/5458a14ae4c8f07055b7441ff0f234cf.gif"
          alt="Speaking..."
          className="absolute top-10 right-10 h-40 w-60 mt-[162px] mr-[1190px] border-4 border-transparent rounded-full animate-glow"
        />
      )}
      {/* {showSuggestions && suggestion && (
        <div className="absolute top-0 right-0 mt-[420px] mr-[1200px] p-2 border rounded max-w-[280px] max-h-[250px] overflow-y-auto w-full bg-gray-100 text-black whitespace-pre-wrap break-words overflow-hidden shadow-md">
          <pre className="whitespace-pre-wrap break-words">{suggestion}</pre>
        </div>
      )} */}
      {/* <div className="relative"> */}
      {/* Chatbot container - Exactly at the same position */}
      <div className="absolute top-0 right-0 mt-[380px] mr-[1200px] p-2 border rounded max-w-[310px] h-[300px] overflow-y-auto w-full bg-gray-100 text-black shadow-md flex flex-col">
        {/* Chat messages */}
        <div className="flex flex-col flex-1 overflow-y-auto p-2 space-y-1">
          {chatMessages.map((msg, index) => (
            <div
              key={index}
              className={`py-2 px-3 rounded ${msg.sender === "user" ? "bg-blue-200 text-right" : "bg-gray-300 text-left"}`}
            >
              {msg.text}
            </div>
          ))}
        </div>

        {/* Input area */}
        <div className="flex items-center border-t p-1">
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            className="flex-1 p-1 border rounded text-black bg-gray-100"
            placeholder="Type a message..."
          />
          <button
            onClick={handleSendMessage}
            className="ml-2 px-2 py-1 bg-blue-600 text-white rounded"
          >
            Send
          </button>
        </div>
      </div>
      {/* </div> */}
      <style jsx>{`
        @keyframes glow {
          0% {
            box-shadow: 0 0 10px rgba(0, 123, 255, 0.7); /* Initial glow */

            border-color: rgba(0, 123, 255, 0.7);
          }

          50% {
            box-shadow: 0 0 40px rgba(0, 123, 255, 0.9); /* Stronger glow */

            border-color: rgba(0, 123, 255, 0.9);
          }

          100% {
            box-shadow: 0 0 10px rgba(0, 123, 255, 0.7); /* Return to initial glow */

            border-color: rgba(0, 123, 255, 0.7);
          }
        }

        .animate-glow {
          animation-name: glow;

          animation-timing-function: ease-in-out;
        }
      `}</style>
    </div>
  );
};
