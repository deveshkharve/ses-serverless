'use strict';
var ses = require('node-ses')
const client = ses.createClient({ key: process.env.SES_KEY, secret: process.env.SES_SECRET });

const sendMail =  async (subject, message, to)=> {
  let res = false;

  return new Promise((resolve , reject)=>{
    client.sendEmail({
      to: to
    , from: process.env.SENDER_EMAIL
    , subject: subject
    , message: message
    , altText: 'plain text'
   }, function (err, data, res) {
     console.log('err', err)
     if (err) { reject(err); return }

     console.log('data', data)
     console.log('res', res)
     resolve(data); 
     return
   });
  }) 
}

module.exports.mailer = async (event) => {
  const eventData = JSON.parse(event.body);
  const {subject, message, to} = eventData
  // const message = `Request received from ${name} email: ${email}`
  const res = await sendMail(subject, message, to)//then( res => {
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify({
      message: `Go Serverless v1.0! Your function executed successfully! with status ${res}`,
    }, null, 2),
  };
  // }
  // ).catch( err=>{
  //   return {
  //     statusCode: 200,
  //     body: JSON.stringify({
  //       message: `Go Serverless v1.0! Your function executed successfully! with status false`,
  //     }, null, 2),
  //   };
  // })
  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
