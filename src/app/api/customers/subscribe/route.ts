import { NextRequest, NextResponse } from "next/server";
import twilio from "twilio";

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const numbersToNotify = process.env.NUMBERS_TO_NOTIFY?.split(",") || [];

export async function POST(request: NextRequest) {
  const client = twilio(accountSid, authToken);

  const { nome, email, celular } = await request.json();
  const message = `
    Um novo cliente se inscreveu no site da Bonetto e aguarda um retorno! 🎉

    Nome: ${nome}
    Email: ${email}
    Número de celular: ${celular}
    Data: ${new Date().toLocaleDateString("pt-BR")}
    Hora: ${new Date().toLocaleTimeString("pt-BR")}
  `;

  try {
    for (const number of numbersToNotify!) {
      try {
        await client.messages.create({
          body: message,
          from: process.env.TWILIO_WHATSAPP_FROM,
          to: number.trim(),
        });

        console.log(
          `Notificação enviada para o número: ${number.trim().replace(/whatsapp:|\+/g, "")}!`,
        );
      } catch (error) {
        console.error(
          `Erro ao tentar enviar notificação para o número: ${number.trim().replace(/whatsapp:|\+/g, "")}! ${error}`,
        );
      }
    }

    return NextResponse.json({
      statusCode: 200,
      body: { message: "Notificações enviadas com sucesso!" },
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      statusCode: 500,
      body: {
        message: `Ocorreu um erro no processo de envio das notificações: ${error}`,
      },
    });
  }
}
