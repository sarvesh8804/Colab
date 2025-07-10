# Hackathon 2025

## TEAM NAME: Ctrl

## Project Statement: Collaborative Text Content Studio with AI Copilot (WD2-CTCS)

**Title:**

Colab

**Members:**

Sarvesh Huddar

Vedant Hariyan

![image](https://github.com/user-attachments/assets/48b1713e-e712-43fd-9ca2-6f3a9a0285df)

![image](https://github.com/user-attachments/assets/c6ccd55c-b6eb-47d0-8b44-1e2c34575fb1)

**ER Diagram:**

![image](https://github.com/user-attachments/assets/1da685bb-7d02-4970-bab4-1aa43408e8b1)


**1. Entities (Tables)**

-   **Users** (Implied, not explicitly defined):

    -   id (Primary Key)

    -   name

    -   email

-   **Documents (Projects)**:

    -   id (Primary Key)

    -   title

    -   initialContent

    -   ownerId (Foreign Key referencing Users)

    -   roomId

    -   organizationId

-   **Document Versions**:

    -   id (Primary Key)

    -   documentId (Foreign Key referencing Documents)

    -   title

    -   content

    -   createdAt

**2. Relationships**

-   **User → Documents** (One-to-Many)

    -   One User can have many Documents.

-   **Document → Document Versions** (One-to-Many)

    -   One Document can have many Document Versions.

**3. Indexes**

-   **Documents**:

    -   by_owner_id (Index on ownerId)

    -   by_organization_id (Index on organizationId)

    -   search_title (Full-text search index on title)

-   **Document Versions**:

    -   by_document_id (Index on documentId)

**Architecture Diagram**

![image](https://github.com/user-attachments/assets/fd77147c-10fa-4d80-a2bb-d90b918d84b9)

**Implementation Report:**

**Overview**

This report outlines the key technologies and dependencies used in the
\"Colab\" project, as reflected in the package.json file. The project
leverages a modern web development stack, focusing on real-time
collaboration, user authentication, and a rich user interface.

**Key Technologies and Dependencies**

-   **Frontend Framework:**

    -   **Next.js (next):** Used for server-side rendering, routing, and
        overall application structure.

    -   **React (react, react-dom):** The core UI library for building
        interactive components.

-   **Authentication:**

    -   **Clerk (@clerk/nextjs):** Handles user authentication and
        management.

-   **Real-time Collaboration:**

    -   **Liveblocks (@liveblocks/client, \@liveblocks/node,
        \@liveblocks/react, \@liveblocks/react-tiptap,
        \@liveblocks/react-ui):** Enables real-time collaborative
        editing and features.

-   **Rich Text Editor:**

    -   **Tiptap (@tiptap/react, \@tiptap/starter-kit, and multiple
        tiptap extensions):** Provides a flexible and extensible rich
        text editor with collaborative capabilities.

-   **UI Components:**

    -   **Radix UI (@radix-ui/\...):** A set of unstyled, accessible UI
        primitives for building custom components.

    -   **Lucide React (lucide-react):** Icons.

    -   **Tailwind CSS (tailwindcss, tailwind-merge,
        tailwindcss-animate):** For styling.

-   **State Management:**

    -   **Zustand (zustand):** Simple and efficient state management.

-   **Form Handling:**

    -   **React Hook Form (react-hook-form):** For form management.

    -   **Zod (zod):** For schema validation.

-   **Google AI:**

    -   **\@google/generative-ai:** For integration with google\'s
        generative AI.

-   **Other Utilities:**

    -   **class-variance-authority, clsx, cmdk, date-fns, nuqs,
        react-color, react-day-picker, react-icons,
        react-resizable-panels, recharts, sonner, vaul, y-protocols:**
        Various utility libraries for enhancing functionality and UI.

-   **Convex:**

    -   **convex:** The backend database.

**Development Tools**

-   **TypeScript (typescript):** Used for static typing.

-   **ESLint (eslint, eslint-config-next):** For code linting and
    formatting.

-   **PostCSS (postcss, autoprefixer):** For CSS processing.

**Summary**

The \"Colab\" project utilizes a robust and modern technology stack,
focusing on real-time collaboration, a rich user experience, and
efficient development practices. The use of Next.js, React, Clerk,
Liveblocks, Tiptap, and Radix UI demonstrates a commitment to building a
high-quality application. The inclusion of Google AI shows an intention
to add advanced features to the application.

**API and WebSocket Event Documentation**

**I. API Documentation (Convex Functions)**

**A. Authentication (Clerk Integration)**

-   **Authentication Flow**:

    -   Users authenticate via **Clerk** and receive a JWT (JSON Web
        Token).

    -   The JWT is included in the Authorization header for all **Convex
        function calls**.

    -   Convex functions verify the JWT against **Clerk** to confirm the
        user\'s identity and permissions.

-   **Required Authentication**:

    -   All functions that involve creating, updating, deleting, or
        retrieving private or organization-specific data require
        authentication via a valid JWT.

**B. Document Management Functions**

**create(title?: string, initialContent?: string):**

-   **Description**: Creates a new document.

-   **Parameters**:

    -   title (string, optional): The title of the document. Defaults to
        \"Untitled document\".

    -   initialContent (string, optional): The initial content of the
        document.

-   **Return Value**: Returns the **ID** of the created document.

-   **Example Usage**:

-   api.documents.create({ title: \"My Project\", initialContent:
    \"Initial text\" });

-   **Authorization**: Requires a valid **Clerk JWT**.

**get(paginationOpts: { cursor?: string, numItems: number }, search?:
string):**

-   **Description**: Retrieves documents with pagination and optional
    search.

-   **Parameters**:

    -   paginationOpts (object): Pagination options including cursor and
        numItems.

    -   search (string, optional): A search term for document titles.

-   **Return Value**: A paginated list of documents.

-   **Behavior**:

    -   If a search term is provided, it searches across the user\'s
        personal documents or organization documents (based on the
        user\'s organizationId).

    -   If organizationId is present in the user context, it retrieves
        documents belonging to that organization. Otherwise, it
        retrieves personal documents.

-   **Authorization**: Requires a valid **Clerk JWT**.

**getById(id: Id\<\"documents\"\>):**

-   **Description**: Retrieves a document by its ID.

-   **Parameters**: id (Id\<\"documents\"\>): The document ID.

-   **Return Value**: The document object.

-   **Error Handling**: Returns an error if the document is not found.

-   **Authorization**: Requires a valid **Clerk JWT**.

**updateById(id: Id\<\"documents\"\>, title: string, content?:
string):**

-   **Description**: Updates a document and saves a new version of it.

-   **Parameters**:

    -   id (Id\<\"documents\"\>): The document ID to update.

    -   title (string): The updated title for the document.

    -   content (string, optional): The updated content for the
        document.

-   **Return Value**: void (no return value).

-   **Behavior**:

    -   A new version of the document is created before updating the
        main record.

    -   Requires the user to be the owner of the document.

-   **Authorization**: Requires a valid **Clerk JWT**.

**removeById(id: Id\<\"documents\"\>):**

-   **Description**: Removes a document.

-   **Parameters**: id (Id\<\"documents\"\>): The document ID.

-   **Return Value**: void (no return value).

-   **Authorization**: Requires the user to be the owner of the document
    or a member of the organization that owns the document. Requires a
    valid **Clerk JWT**.

**getVersions(id: Id\<\"documents\"\>):**

-   **Description**: Fetches all versions of a specific document.

-   **Parameters**: id (Id\<\"documents\"\>): The document ID.

-   **Return Value**: An array of document version objects.

-   **Error Handling**: Returns an empty array if no versions are found
    or an error occurs.

-   **Authorization**: Requires a valid **Clerk JWT**.

**restoreVersion(documentId: Id\<\"documents\"\>, versionId:
Id\<\"document_versions\"\>):**

-   **Description**: Restores a document to a specific version.

-   **Parameters**:

    -   documentId (Id\<\"documents\"\>): The document ID.

    -   versionId (Id\<\"document_versions\"\>): The version ID to
        restore.

-   **Return Value**: The restored version object.

-   **Error Handling**: Returns an error if the version or document is
    not found.

-   **Authorization**: Requires a valid **Clerk JWT**.

**C. Organization Management Functions**

**createOrganization(clerkOrgId: string):**

-   **Description**: Creates a new organization.

-   **Parameters**:

    -   clerkOrgId (string): The Clerk organization ID.

-   **Return Value**: The ID of the created organization.

-   **Authorization**: Requires a valid **Clerk JWT**.

**getOrganization(organizationId: Id\<\"organizations\"\>):**

-   **Description**: Retrieves an organization by its ID.

-   **Parameters**:

    -   organizationId (Id\<\"organizations\"\>): The organization ID.

-   **Return Value**: The organization object.

-   **Authorization**: Requires a valid **Clerk JWT**.

**D. User Management Functions**

**createUser(name: string, email: string, clerkId: string):**

-   **Description**: Creates a new user in the database.

-   **Parameters**:

    -   name (string): User\'s full name.

    -   email (string): User\'s email address.

    -   clerkId (string): User\'s Clerk ID.

-   **Return Value**: The ID of the created user.

-   **Authorization**: Requires a valid **Clerk JWT**.

**getUser(userId: Id\<\"users\"\>):**

-   **Description**: Retrieves a user\'s information.

-   **Parameters**:

    -   userId (Id\<\"users\"\>): The user ID.

-   **Return Value**: The user object (name, email, etc.).

-   **Error Handling**: Returns an error if the user is not found.

-   **Authorization**: Requires a valid **Clerk JWT**.

**updateUser(userId: Id\<\"users\"\>, updates: { name?: string, email?:
string, \... }):**

-   **Description**: Updates a user\'s information.

-   **Parameters**:

    -   userId (Id\<\"users\"\>): The user ID.

    -   updates (object): Object containing fields to update (e.g.,
        name, email).

-   **Return Value**: void.

-   **Authorization**: Requires a valid **Clerk JWT**.

**II. WebSocket Event Documentation (Liveblocks)**

**A. Room States**

-   **Document Content**:

    -   Stored as a string within the Liveblocks room\'s storage.

-   **Cursor Positions**:

    -   Stored as **presence data** in the room, indicating the position
        of each user\'s cursor.

-   **User Presence Data**:

    -   Includes the user\'s name and profile picture, stored inside the
        presence data.

**B. Liveblocks Events**

-   **room.update**:

    -   **Description**: Emitted when the room\'s storage is updated
        (e.g., document content changes).

    -   **Payload**: The updated room state, including document content.

-   **presence.update**:

    -   **Description**: Emitted when a user\'s presence data changes
        (e.g., cursor position).

    -   **Payload**: The updated presence data, including the user\'s
        cursor position, name, and profile picture.

**C. Event Flow**

-   **Document Updates**: When a user types, the client updates the
    Liveblocks room\'s storage with the new content. Liveblocks
    broadcasts the room.update event to all connected clients. Clients
    receive the event and update the document content in the UI.

-   **Cursor Movement**: When a user moves their cursor, the client
    updates the Liveblocks presence data with the new cursor position.
    Liveblocks broadcasts the presence.update event to all connected
    clients. Clients receive the event and update the cursor positions
    in the UI.

**D. Error Handling (Liveblocks)**

-   **Connection Errors**:

    -   The application handles connection errors by displaying a
        message to the user and attempts automatic reconnection.

**E. Presence Data Details**

-   **Cursor Position**:

    -   The presence.update event carries cursor position data, allowing
        other users to see where collaborators are editing in real-time.

-   **User Identification**:

    -   Presence data includes user identification information (name,
        picture) fetched from Clerk, enabling clear visual
        representation of collaborators.

-   **Real-Time Updates**:

    -   Presence updates are transmitted in real-time, providing
        immediate feedback on collaborator activity (e.g., cursor
        movement).

**F. Liveblocks Room Management**

-   **Room Creation**:

    -   Liveblocks rooms are dynamically created when a user opens a
        document for editing. The room ID is typically associated with
        the document ID.

-   **Room Joining/Leaving**:

    -   Users join a Liveblocks room when they open a document and leave
        when they close the document. Rooms persist even if all users
        leave.

**G. Data Synchronization**

-   **Conflict Resolution**:

    -   Liveblocks handles conflict resolution for concurrent edits,
        ensuring data consistency between all clients.

-   **Data Consistency**:

    -   Liveblocks guarantees that all connected clients have a
        consistent view of the document content in real-time.

-   **Optimistic Updates**:

    -   Clients may perform optimistic updates to improve
        responsiveness, with Liveblocks ensuring eventual consistency.

**H. Security Considerations**

-   **Room Access Control**:

    -   Room access is controlled through authentication and
        authorization, ensuring that only authorized users can edit or
        view documents.

-   **Data Encryption**:

    -   Liveblocks ensures encryption of data both in transit and at
        rest to protect sensitive information.

**I. Liveblocks Customization**

-   **Custom Events**:

    -   If your application uses custom Liveblocks events beyond the
        standard room.update and presence.update, document them here,
        including their payload structure and behavior.

**III. Translation API (Google Translate)**

**POST /translate**

-   **Description**: Translates a given text into a specified target
    language using the Google Translate API.

-   **Endpoint**:

-   POST /translate

-   **Request Body**: {\"text\": \"Hello\",\"targetLang\": \"es\"}

-   **Response**: {\"translatedText\": \"Hola\"}

-   **Query Parameters**:

    -   text (string): The text to be translated.

    -   targetLang (string): The language code to translate the text
        into (e.g., \"es\" for Spanish).

-   **Error Handling**:

    -   **400**: Missing text or targetLang.

    -   **500**: Failed to translate due to an internal error.

**IV. Rate Limiting and Usage Policies**

**Rate Limits**

Currently, the API does **not** impose rate limits by default. However,
if you are using Convex, Liveblocks, or other third-party services, you
may need to implement rate limiting at the API gateway or service level.
You can add custom rate-limiting rules to prevent excessive use.

**Handling Rate Limit Exceedance**

In the event of rate limiting, the server will respond with a 429 Too
Many Requests status, accompanied by a Retry-After header to specify
when the user can resume making requests.

**V. API Versioning**

**Versioning Strategy**

Our API follows a **no-versioning** strategy. Future changes to the API
will be done in a backward-compatible way. If breaking changes are
introduced in the future, we will ensure that users are notified well in
advance.

-   **Current Version**: All API requests are based on the current
    version (v1), and versioning is applied at the service layer as
    needed.

Here\'s the proper and detailed API documentation section for **Gemini
(Google Generative AI)**, including rate limiting, versioning, and usage
policies. You can integrate this directly into your documentation.

**VI. Gemini (Google Generative AI) API Documentation**

**Rate Limiting**

The **Google Gemini API** (which powers the generative AI models) is
subject to rate limits that depend on your **Google Cloud account** and
the usage tier you\'re subscribed to. Here are the general guidelines:

-   **Free Tier**:

    -   Rate Limit: **Up to 100 requests per minute**.

    -   Exceeding Rate Limits: If you exceed the request limits, the API
        will respond with a **429 Too Many Requests** status and provide
        a **Retry-After** header to indicate when you can retry your
        request.

-   **Paid Tier**:

    -   Higher rate limits are available with the **Google Cloud paid
        plans**, and the specific rate limits will depend on the plan
        you\'re subscribed to.

    -   Check the **Google Cloud Console** to monitor your usage and
        adjust your tier if necessary.

**Response on Rate Limit Exceedance:**

-   **HTTP Status**: 429 Too Many Requests

-   **Header**: Retry-After: A value indicating the duration you must
    wait before sending additional requests.

**API Versioning**

The **Gemini API** does not use traditional API versioning (such as v1,
v2, etc.) via the URL path. Instead, versioning is managed at the
**model level**, and you specify the version of the model you wish to
use in the request itself.

-   **Current Model Example**: \"gemini-1.5-flash\" (as seen in your
    code).

-   **Model Version**: To use a different model, you would change the
    model name in the request, e.g., from \"gemini-1.5-flash\" to a
    newer version if one becomes available (e.g., \"gemini-2.0\").

When Google releases new versions of Gemini, you should check for the
updated model version and adjust the model string in your API calls
accordingly.

**Example API Request:**

-   **Model Version**: gemini-1.5-flash or any future updated model.

-   **Versioning Approach**: Adjust the model name in the request to use
    the latest available version when necessary.

**Usage Policies**

By using the **Gemini API**, you agree to the following terms and
policies set by **Google Cloud**:

**Data Usage:**

-   **Processing**: Data you send to the Gemini API (such as the text
    you\'re processing) is typically used only for processing that
    specific request. However, **Google may use aggregated data** to
    improve the performance and capabilities of their models.

-   **No Data Sharing**: The Gemini API does not share your data with
    third parties unless specified in Google's privacy policy.

**Data Retention:**

-   **Temporary Retention**: Google may retain data temporarily to
    enhance model performance, but sensitive data is not stored
    indefinitely.

-   **Privacy**: Review **Google Cloud\'s Privacy Policy** for more
    information on data retention practices and your rights concerning
    your data.

**Prohibited Use:**

-   **Misuse of API**: Any attempt to overload or misuse the API (e.g.,
    sending excessive requests or using the API in ways not intended by
    Google) may result in your access being suspended.

-   **Compliance**: Users must comply with Google Cloud\'s **Terms of
    Service** and adhere to acceptable use policies.

**Service Level Agreement (SLA):**

-   **Reliability**: Google offers reliability and uptime commitments
    through their **Service Level Agreement (SLA)** for Cloud services.
    While Google strives to maintain high availability, no SLA
    guarantees are made for the Gemini API specifically. It's important
    to monitor and test the service in production environments for
    availability.

**API Security:**

-   **Authentication**: All requests to the Gemini API require proper
    authentication using a valid **API key** provided by Google Cloud.

-   **API Key Security**: The API key should be kept secure and never
    exposed in client-side code to prevent unauthorized access.

**Error Handling**

When making requests to the **Gemini API**, it\'s important to handle
errors gracefully. Some common errors you might encounter:

-   **400 Bad Request**: Invalid input or malformed request.

-   **401 Unauthorized**: Invalid or missing API key.

-   **429 Too Many Requests**: Exceeded rate limits. You should respect
    the Retry-After header for retrying requests.

-   **500 Internal Server Error**: Issue on the server side (Google's
    Gemini service). In such cases, retrying after a short delay may
    resolve the issue.

**Gemini API Best Practices**

-   **Rate Limiting Management**: Ensure your application handles rate
    limiting by implementing retries or backoff strategies.

-   **Model Updates**: Stay updated on new versions of the Gemini models
    and adapt your API calls accordingly to use the latest available
    version.
