import type { NextApiRequest, NextApiResponse } from 'next';
import sendgrid from '@/api/sendgrid';
import grecaptcha from '@/api/grecaptcha';
import { getClientIp } from 'request-ip'

interface ReqData {
  grecaptchaToken: string,
  fromEmail: string,
  fromName: string,
  subject: string,
  text: string,
}

interface ApiRequest extends NextApiRequest {
  body: ReqData,
}

type ResData = string;

type ApiResponse = NextApiResponse<ResData>;

export default async function handler(
  req: ApiRequest,
  res: ApiResponse
) {
  if (req.method === 'POST') {
    const {
      grecaptchaToken,
      fromEmail,
      fromName,
      subject,
      text,
    } = req.body;
    
    if (!grecaptchaToken) {
      res.status(400).json('missing recaptcha token');
      return;
    }
    
    const grecaptchaResult = await grecaptcha.verify(
      grecaptchaToken,
      getClientIp(req) as string
    );
    
    if (!grecaptchaResult.success) {
      res.status(401).json('failed recaptcha check');
      return;
    }
    
    await sendgrid.sendMail(fromEmail, fromName, subject, text);
    res.status(200).json('');
  }
  res.status(405);
}
