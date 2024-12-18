export function checkEmail(email: string): boolean{
  const  emailTemplate: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailTemplate.test(email);
}

export function checkPass(pass: string): boolean{
    if(pass.length >= 3 && pass.length <= 20) return true;
    return false;
}

export function checkFullName(name: string): boolean{
    if(name.length > 0) return true;
    return false;
}