
import OpenAI from "openai";
import dotenv from "dotenv";
dotenv.config();

const openai = new OpenAI({ apiKey: process.env.OPENAI_TOKEN });

async function getArtistAnalysis(body) {
  await console.log("BODYBODYBODYBODYBODY",JSON.stringify(body));

  const completion = await openai.chat.completions.create({
    messages: [
        {"role": "system", "content": "You are a helpful you analyze people's music tastes based on their spotify user data."},
        {"role": "user", "content": `Here is my top artist data from spotify: ${JSON.stringify(body)}! what can you tell me about myself?`}
      ],
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices[0]);
  return completion.choices[0];
}

export default getArtistAnalysis;