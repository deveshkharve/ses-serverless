## SES-MAILER-SERVICE

This service sends out emails using SES and with API Gateway. And can be used to send out notification/mail for some transactional activity.
This I personally used to integrate "contact us" form in a static website. 

### How to use

update the following variables in serverless.yml
`SES_KEY: <AWS_KEY>`
`SES_SECRET: <AWS_SECRET>`
`SENDER_EMAIL: <my@verified.email>`

default endpoint:
`/mail`

  
Request body
`{ "to": "your@verified.mail",
"subject": "My ses email",
"message": "YOUR-MESSAGE-BODY"
}`

to: recipents email address
subject: mail subject
message: mail body

#### Note:
* sender email address has to be always verfied before you can post a successfull request.

- In case email is not verified, resposnse will be access denied.
- When using ses-sandbox, you need to verify the recipents email address.
- To send email to unverified one need to request ses for production access. Please refer the following link
<https://docs.aws.amazon.com/ses/latest/DeveloperGuide/request-production-access.html>