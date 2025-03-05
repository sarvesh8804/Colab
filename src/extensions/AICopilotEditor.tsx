// // import { Extension } from '@tiptap/core';
// // import { GoogleGenerativeAI } from "@google/generative-ai";

// // const genAI = new GoogleGenerativeAI("AIzaSyDYz6fwf8fQuQa_sKoLhSDyS3PRP5FQHfM"); //replace with your api key.

// // const AICopilot = Extension.create({
// //   name: 'aiCopilot',

// //   addKeyboardShortcuts() {
// //     return {
// //       'Mod-Shift-Enter': () => this.editor.commands.aiComplete(),
// //     };
// //   },

// //   addCommands() {
// //     return {
// //       aiComplete:
// //         () =>
// //         ({ editor }) => {
// //           const selection = editor.view.state.selection;
// //           const text = editor.getText();
// //           const selectedText = text.slice(selection.from, selection.to);

// //           async function run() {
// //             const model = genAI.getGenerativeModel({ model: "gemini-pro"});
// //             const prompt = selectedText;

// //             const result = await model.generateContent(prompt);
// //             const response = await result.response;
// //             const text = response.text();
// //             editor.commands.insertContent(text);
// //           }
// //           run();

// //           return true;
// //         },
// //     };
// //   },
// // });

// // export default AICopilot;

// import { Extension } from '@tiptap/core';
// import { GoogleGenerativeAI } from "@google/generative-ai";

// // Replace with your actual API key. Consider using environment variables.
// const API_KEY = "AIzaSyDYz6fwf8fQuQa_sKoLhSDyS3PRP5FQHfM";

// const AICopilot = Extension.create({
//   name: 'aiCopilot',

//   addKeyboardShortcuts() {
//     return {
//       'Mod-Shift-Enter': () => this.editor.commands.aiComplete(),
//     };
//   },

//   addCommands() {
//     return {
//       aiComplete:
//         () =>
//         ({ editor }) => {
//           const selection = editor.view.state.selection;
//           const text = editor.getText();
//           const selectedText = text.slice(selection.from, selection.to);

//           async function run() {
//             if (API_KEY === "YOUR_GOOGLE_GEMINI_API_KEY") {
//               console.error("Please replace 'YOUR_GOOGLE_GEMINI_API_KEY' with your actual API key.");
//               return;
//             }

//             if (!API_KEY) {
//               console.error("API key not set.");
//               return;
//             }

//             try {
//               const response = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent", {
//                 method: "POST",
//                 headers: {
//                   "Content-Type": "application/json",
//                   "x-goog-api-key": API_KEY, // Use x-goog-api-key for Google APIs
//                 },
//                 body: JSON.stringify({
//                   contents: [{ parts: [{ text: selectedText }] }],
//                 }),
//               });

//               if (!response.ok) {
//                 const errorData = await response.json();
//                 console.error("Gemini API error:", errorData);
//                 return;
//               }

//               const data = await response.json();

//               if (data.candidates && data.candidates.length > 0 && data.candidates[0].content && data.candidates[0].content.parts && data.candidates[0].content.parts.length > 0) {
//                 const generatedText = data.candidates[0].content.parts[0].text.trim();
//                 editor.commands.insertContent(generatedText);
//               } else {
//                 console.warn("Gemini returned an empty response or unexpected data format.");
//               }
//             } catch (error) {
//               console.error("Network error:", error);
//             }
//           }

//           run();
//           return true;
//         },
//     };
//   },
// });

// export default AICopilot;


import { Extension } from '@tiptap/core';

const AICopilot = Extension.create({
  name: 'aiCopilot',

  addKeyboardShortcuts() {
    return {
      'Mod-Shift-Enter': () => this.editor.commands.aiComplete(),
    };
  },

  addCommands() {
    return {
      aiComplete:
        () =>
        ({ editor }) => {
          const selection = editor.view.state.selection;
          const text = editor.getText();
          console.log(text)
          const selectedText = text.slice(selection.from, selection.to);
          console.log(selectedText)
          function run() {
            if (!selectedText.trim()) {
              editor.commands.insertContent("Please select some text.");
              return;
            }

            const lowerCaseText = selectedText.toLowerCase();
              console.log(lowerCaseText)
            let response = "";

            if (lowerCaseText.includes("hello")) {
              response = "Hello to you too!";
            } else if (lowerCaseText.includes("how are you")) {
              response = "I'm doing well, thank you!";
            } else if (lowerCaseText.includes("summarize")) {
              const words = selectedText.split(" ");
              if (words.length > 10) {
                response = "Summary: " + words.slice(0, 10).join(" ") + "...";
              } else {
                response = "Summary: " + selectedText;
              }
            } else if (lowerCaseText.includes("correct spelling")) {
              let correctedText = selectedText.replace("teh", "the").replace("recieve", "receive");
              response = correctedText;
            } else if (lowerCaseText.includes("add a comma")) {
                let correctedText = selectedText.replace("and", ", and");
                response = correctedText;
            }
            else {
              response = "I'm not sure how to respond to that.";
            }

            // Insert the response only if it's not empty
            if (response) {
              editor.commands.insertContent(response);
            }
          }

          run();
          return true;
        },
    };
  },
});

export default AICopilot;