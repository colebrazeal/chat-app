
---

# **Komissa AI Chatbot**

**Komissa AI Chatbot** is a conversational AI built using **Next.js** and **TypeScript**, powered by the **OpenAI API**. This chatbot is inspired by **Komissa**, the AI from the anime **Psycho-Pass**.

The project demonstrates how to integrate OpenAI’s GPT-based language model into a custom chatbot interface. The chatbot can respond to user queries in a way that mirrors the functionality of Komissa, acting as a conversational partner in your web application.

## **Features**

- **AI-powered chat interface** using OpenAI's GPT API
- **TypeScript** and **Next.js** for efficient, type-safe, and server-side rendered application
- **Responsive design** for use on both desktop and mobile devices
- Inspired by the **Komissa** AI from **Psycho-Pass**, with custom responses tailored to your input
- **Message history**: Keeps track of conversation context, so each new message is informed by the previous ones.

## **Technologies Used**

- **Next.js**: A React framework for building static and dynamic web applications.
- **TypeScript**: A superset of JavaScript that adds static typing, improving code quality and maintainability.
- **OpenAI API**: Utilized to handle the conversational AI aspect of the chatbot. The OpenAI GPT model generates responses based on user input.
- **Tailwind CSS**: Used for styling and responsive design, allowing for rapid prototyping of UI elements.

## **Installation**

Follow these steps to set up the project locally:

### **1. Clone the repository**

```bash
git clone https://github.com/yourusername/komissa-ai-chatbot.git
```

### **2. Navigate to the project directory**

```bash
cd chatbot-openai
```

### **3. Install the dependencies**

Make sure you have **Node.js** installed, then run:

```bash
npm install
```

### **4. Set up the OpenAI API key**

To authenticate your requests to the OpenAI API, you'll need to create an API key from OpenAI's website. 

- Go to [OpenAI's API page](https://beta.openai.com/signup/) to create an account and generate your API key.
- Once you have your API key, create a `.env.local` file in the root of the project, and add the following:

```bash
OPENAI_API_KEY=your-openai-api-key-here
```

### **5. Run the development server**

Start the Next.js development server:

```bash
npm run dev
```

This will launch the application in development mode. Open your browser and go to `http://localhost:3000` to interact with the chatbot.

## **Project Structure**

- **/pages**: Contains the application's route-based components.
  - **index.tsx**: The main page with the chat interface.
  
- **/components**: Reusable components used throughout the project.
  - **ChatInput.tsx**: The message input field for user interaction.
  - **BotMessage.tsx** and **UserMessage.tsx**: Components to display messages from the bot and user respectively.

- **/actions**: Contains the logic for interacting with the OpenAI API and fetching responses based on user input.

- **/styles**: Tailwind CSS styles and custom styling for the chatbot interface.

## **Usage**

Once the application is running, you can interact with the chatbot through the chat interface:

1. **User Input**: Type your message in the input box at the bottom of the screen.
2. **AI Response**: Komissa will generate and display a response to your query.
3. **Message History**: The chatbot remembers the entire conversation and bases its responses on previous exchanges, allowing for context-aware conversations.

## **Customization**

You can customize the chatbot's personality and behavior by modifying the `chatCompletion` function found in the `/actions` folder. This function is responsible for making the request to OpenAI's API and handling the response.

To change the system message (the "tone" of the AI), adjust the prompt being sent to the model. You could add additional instructions to make it sound more like the Komissa AI from **Psycho-Pass**.

## **Deployment**

To deploy this chatbot on a production server, you can use Vercel (the creators of Next.js) or any other hosting provider that supports Next.js applications. Here's how to deploy with **Vercel**:

1. Push your code to **GitHub** (if not already done).
2. Sign up for a free account on **Vercel**: [https://vercel.com](https://vercel.com).
3. Link your GitHub repository to Vercel.
4. Set up your environment variables (e.g., `OPENAI_API_KEY`) in Vercel's dashboard.
5. Deploy your project.

Vercel will automatically handle the build and deployment of the application.

## **Contributing**

Feel free to contribute! Whether it's improving the UI/UX, adding more features, or optimizing the AI's responses, all contributions are welcome.

1. Fork the repository
2. Create a new branch for your changes
3. Commit your changes
4. Push to your forked repository
5. Open a pull request with a description of what you’ve changed

## **License**

This project is open-source and available under the [MIT License](LICENSE).

## **Acknowledgments**

- **OpenAI** for the GPT API that powers the AI chatbot.
- **Next.js** and **TypeScript** for making it easy to build robust, scalable web applications.
- **Komissa** from the anime **Psycho-Pass**, the inspiration behind the AI character.


- Cole Brazeal
---
