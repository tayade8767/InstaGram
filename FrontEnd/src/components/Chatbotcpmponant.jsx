/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import ChatBot from "react-chatbotify";

function Chatbotcpmponant() {
    const [userInput, setUserInput] = useState(""); // To store user input
    const [botResponse, setBotResponse] = useState(""); // To store bot response

    const flow = {
        start: {
            message: "Hi, I'm the chatbot! How can I help you today?",
            path: "userInput"
        },
        userInput: {
            message: (params) => params.userInput, // Display user input
            path: 'botResponse' // Move to bot response
        },
        botResponse: {
            message: async (params) => {
                try {
                    const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyBoy2MSCSa9Fgxnhs288vlPYmeDsQqXxCU', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            "contents": [{
                                "parts": [{
                                    "text": params.userInput
                                }]
                            }]
                        }),
                    });

                    const data = await response.json();
                    console.log("Bot response:", data); // Log the bot response

                    // Set the response from the bot, specifically extracting the text content
                    const botText = data.candidates[0]?.content?.parts[0]?.text || "Sorry, I couldn't find a valid response.";
                    setBotResponse(botText); 
                    
                    return botText; // Return bot response for display
                } catch (error) {
                    return "Sorry, something went wrong. Please try again.";
                }
            },
            path: 'userInput' // Loop back to get more input from the user
        }
    }

    const settings = {
        general: {
            embedded: true,
            primaryColor: "#42b0c5",
            secondaryColor: "#491d8d",
        },
        chatHistory: {
            storageKey: "conversations_summary"
        },
        chatInput: {
            onSubmit: (input) => {
                setUserInput(input); // Capture user input when submitted
                return input;
            }
        }
    }

    return (
        <ChatBot settings={settings} flow={flow} />
    );
}

export default Chatbotcpmponant;
