import { ChatOpenAI } from '@langchain/openai';
import OpenAI from "openai";


async function main() : Promise<number> {
    const model = new ChatOpenAI({
        model: "gpt-4.1-nano-2025-04-14"
    });

    const response = await model.invoke("Hello!");
    console.log(response);
    
    return Promise.resolve(0);
}

//Execute the main function
await main()
.catch((e) => {
    console.error("Error occurred while running main:", e);
})
.finally(() => {
    console.log("Execution completed.");
});