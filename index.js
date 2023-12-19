const { OpenAI, OpenAIApi } = require("openai");

const openai = new OpenAI({
  apiKey: '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',
});


const runPrompt = async () => { 
    const prompt = "give me a very short and very simple prompt for a very simple logo that my penplotter will draw";
    const textResponse = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
            {
                role: "user",
                content: prompt
            }
        ],
        max_tokens: 256,
        temperature: 1,
    });

    generatedPrompt = textResponse['choices'][0]['message']['content'] + "in monochrome geometric shapes with white background"
    console.log(generatedPrompt)


    const imageResponse = await openai.images.generate({
        prompt: generatedPrompt,
        n: 1,
        size: "1024x1024",
    });
    console.log(imageResponse.data[0]['url']);
}




runPrompt();