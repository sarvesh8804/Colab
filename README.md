# Colab - Collaborative Text Content Studio with AI Copilot

## Hackathon 2025
**Team Name:** Ctrl  
**Project Submission (WD2-CTCS):** Collaborative Text Content Studio with AI Copilot  
**Members:**  
- Sarvesh Huddar  
- Vedant Hariyan  

---

## 🚀 Overview
Colab is a modern web-based collaborative text content studio that enables real-time editing, version control, and AI-powered assistance. It is built using cutting-edge technologies to facilitate seamless teamwork, document management, and AI-generated suggestions. 

---

## 📌 Features
- **Real-time Collaboration:** Edit documents simultaneously with teammates.
- **AI Copilot:** Generate text, suggest edits, and enhance content using Google's Generative AI.
- **Version Control:** Track changes, restore previous versions, and maintain document history.
- **User Authentication:** Secure login and access management with Clerk.
- **Organization Support:** Work within personal or organizational workspaces.
- **Rich Text Editing:** Utilize a feature-rich editor powered by Tiptap.
- **Live Presence:** See collaborators' cursor movements and live edits.
- **Optimized UI:** Accessible and user-friendly UI using Radix UI and TailwindCSS.

---

## 🏗️ Tech Stack
### **Frontend**
- [Next.js](https://nextjs.org/) - Server-side rendering and routing.
- [React](https://react.dev/) - Component-based UI development.
- [Tailwind CSS](https://tailwindcss.com/) - Styling framework.
- [Radix UI](https://www.radix-ui.com/) - Accessible UI primitives.
- [Lucide React](https://lucide.dev/) - Icons for UI components.

### **Backend & Database**
- [Convex](https://convex.dev/) - Real-time database and backend framework.
- [Liveblocks](https://liveblocks.io/) - Real-time collaborative editing.
- [Google AI](https://cloud.google.com/ai/) - Generative AI integration.

### **Authentication & State Management**
- [Clerk](https://clerk.dev/) - User authentication and management.
- [Zustand](https://zustand-demo.pmnd.rs/) - State management for React.

---

## 📁 Project Structure
```
📂 colab-project
│-- 📁 src
│   │-- 📂 components       # Reusable UI components
│   │-- 📂 hooks            # Custom React hooks
│   │-- 📂 pages            # Next.js pages
│   │-- 📂 styles           # Tailwind CSS and global styles
│   │-- 📂 utils            # Helper functions
│-- 📂 public               # Static assets
│-- package.json            # Dependencies and scripts
│-- README.md               # Project documentation
```

---

## 🛠️ Installation & Setup
### **Prerequisites**
- Node.js (>= 16)
- npm or yarn

### **Steps to Run Locally**
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/colab.git
   cd colab
   ```
2. Install dependencies:
   ```bash
   npm install  # or yarn install
   ```
3. Configure environment variables in a `.env.local` file:
   ```env
   NEXT_PUBLIC_CLERK_FRONTEND_API=<your-clerk-api-key>
   NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY=<your-liveblocks-api-key>
   NEXT_PUBLIC_CONVEX_URL=<your-convex-url>
   GOOGLE_API_KEY=<your-google-api-key>
   ```
4. Start the development server:
   ```bash
   npm run dev  # or yarn dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📡 API Endpoints
### **Authentication (Clerk Integration)**
- **User login & authentication** handled via Clerk JWTs.
- Secure access to documents and organizations.

### **Document Management**
- `POST /documents/create` - Create a new document.
- `GET /documents` - Retrieve paginated documents with optional search.
- `GET /documents/:id` - Retrieve a document by ID.
- `PUT /documents/:id` - Update a document and save a new version.
- `DELETE /documents/:id` - Remove a document.
- `GET /documents/:id/versions` - Fetch document version history.
- `POST /documents/:id/restore` - Restore a document to a previous version.

### **Live Collaboration (WebSockets via Liveblocks)**
- `room.update` - Emitted when document content is updated.
- `presence.update` - Tracks user presence (cursor position, name, profile picture).

### **AI Assistance (Google AI - Gemini API)**
- `POST /ai/generate-text` - Generate AI-powered text suggestions.
- `POST /translate` - Translate text using Google Translate API.

---

## 🔐 Security & Authentication
- **JWT-Based Authentication:** All API requests require a valid JWT from Clerk.
- **Role-Based Access Control:** Users can only access/edit documents they own or belong to their organization.
- **Data Encryption:** Secure storage and transmission of user data.
- **Rate Limiting:** Implemented to prevent API abuse.

---

## 📊 Architecture Overview
### **ER Diagram**
Entities:
- **Users**: Handles authentication and user management.
- **Documents**: Stores collaborative projects.
- **Document Versions**: Maintains edit history.

Relationships:
- **User → Documents (One-to-Many)**
- **Document → Document Versions (One-to-Many)**

### **System Architecture**
```
Client (Next.js)  <--->  Backend (Convex + Liveblocks)  <--->  AI Services (Google AI)
```  
- **Frontend:** Next.js manages UI, authentication, and real-time state updates.
- **Backend:** Convex provides a serverless backend for database management.
- **Real-Time Collaboration:** Liveblocks syncs document edits and user presence.
- **AI Integration:** Google Gemini API enhances user experience with AI-generated suggestions.

---

## 📜 License
This project is licensed under the [MIT License](LICENSE).

---

## 🧑‍💻 Contributors
- **Sarvesh Huddar**  
- **Vedant Hariyan**  

Feel free to contribute! Open a pull request or report issues if you encounter any problems.

---

## 📞 Contact
For any queries, contact us at:
- 📧 Email: support@colab.ai
- 🐦 Twitter: [@colab_app](https://twitter.com/colab_app)
- 🌐 Website: [colab.ai](https://colab.ai)

Happy coding! 🚀

 
 
