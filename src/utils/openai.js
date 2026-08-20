// OpenAI API Integration Utilities

const OPENAI_API_KEY = process.env.NEXT_PUBLIC_OPENAI_API_KEY;
const OPENAI_API_URL = "https://api.openai.com/v1/chat/completions";

export const estimateProject = async (userMessage, conversationHistory = []) => {
  if (!OPENAI_API_KEY) {
    // Fallback to mock response if API key is not set
    return {
      content: `Based on your project description, here's my estimate:

**Estimated Cost:** ₹35,000 - ₹50,000
**Timeline:** 4-6 weeks
**Key Features:**
- Responsive design
- User authentication
- Database integration
- Payment gateway (if needed)

Would you like me to provide more details about any specific aspect?`,
      usage: null
    };
  }

  try {
    const messages = [
      {
        role: "system",
        content: `You are an AI project estimator for TheTriFusion, a software development company. 
        Help users estimate their project costs, timelines, and required features. 
        Be professional, helpful, and provide realistic estimates based on industry standards.
        Always provide estimates in Indian Rupees (₹) and mention typical timelines in weeks.
        Format your responses with clear sections for Cost, Timeline, and Features.`
      },
      ...conversationHistory,
      {
        role: "user",
        content: userMessage
      }
    ];

    const response = await fetch(OPENAI_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: messages,
        temperature: 0.7,
        max_tokens: 500
      })
    });

    if (!response.ok) {
      throw new Error(`OpenAI API error: ${response.statusText}`);
    }

    const data = await response.json();
    const assistantMessage = data.choices[0]?.message?.content || "";

    return {
      content: assistantMessage,
      usage: data.usage
    };
  } catch (error) {
    console.error("OpenAI API error:", error);
    
    // Return fallback response on error
    return {
      content: `I apologize, but I'm having trouble processing your request right now. 
      Please try again or contact us directly at TheTrifusion@gmail.com for a personalized estimate.`,
      usage: null,
      error: error.message
    };
  }
};

export const formatAIResponse = (content) => {
  // Format the AI response for better display
  return content
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.length > 0);
};

