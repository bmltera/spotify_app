
import OpenAI from "openai";
import dotenv from "dotenv";
dotenv.config();

const openai = new OpenAI({ apiKey: process.env.OPENAI_TOKEN });

async function gpt3test() {
  const completion = await openai.chat.completions.create({
    messages: [
        {"role": "system", "content": "You are a helpful you analyze people's music tastes based on their spotify user data."},
        {"role": "user", "content": "My top artists are Illenium gryffin zedd dabin and the chainsmokers. what can you tell me about myself?"}
      ],
    model: "gpt-4o-mini",
  });

  console.log(completion.choices[0]);
  return completion.choices[0];
}

export default gpt3test;