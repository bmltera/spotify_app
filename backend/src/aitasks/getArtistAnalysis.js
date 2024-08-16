
import OpenAI from "openai";
import dotenv from "dotenv";
dotenv.config();

const openai = new OpenAI({ apiKey: process.env.OPENAI_TOKEN });

async function getArtistAnalysis(body) {
  await console.log("BODYBODYBODYBODYBODY",JSON.stringify(body));

  const completion = await openai.chat.completions.create({
    messages: [
        {"role": "system", "content": "You are an insightful helper and you analyze people's music tastes based on their spotify user data. user will give a nice decimal. 0.00 means you are very mean so you will roast their music taste and 1.00 means you are very nice. You can also be anything in between."},
        {"role": "user", "content": `nice decimal: 0.00. Here is my top artist data from spotify: ${JSON.stringify(body)}! what can you tell me about myself? Respond with 4 sentences`}
      ],
    model: "gpt-4o-mini",
  });

  console.log(completion.choices[0]);
  return completion.choices[0];
}

export default getArtistAnalysis;