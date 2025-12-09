import z from "zod";

// definizione dello schema con i dati da sanitizzare
export const preventivoSchema = z.object({
  nome: z
    .string()
    .min(1, "Il nome è obbligatorio")
    .regex(/^[a-zA-Z\s]+$/, "Il nome non può contenere numeri o caratteri speciali"),
  email: z
    .string()
    .email("Email non valida"),
  messaggio: z
    .string()
    .min(1, "Il messaggio è obbligatorio"),
  policy: z
    .boolean()
    .refine((v) => v === true, "La privacy policy deve essere accettata"),
});



// // Funzione anti-injection / XSS (semplice e leggera)

// function sanitize(str: string) {
//   return str
//     .replace(/</g, "&lt;")
//     .replace(/>/g, "&gt;")
//     .replace(/script/gi, "");
// }
