$(document).ready(function () {
        var your_api_key = "sk-j7yf7sf02y12oh0pyiet5k2663t6jbvfcehzmdlv7xu3xo36og8ad4o8weob94ts69";
        var transfer_phone_number_to_call = "+91 7667244137";
        var voice_id_techavtar = "11";

        $("#phoneForm").submit(async function (event) {
          event.preventDefault(); // Prevent default form submission

          var phoneNumber = document.getElementById("phoneNumber").value;
          phoneNumber = String(phoneNumber); // Convert to string
          var phone_number_to_call = phoneNumber; // Construct phone number string

          console.log("Making phone call...");

          const headers = {
            Authorization: your_api_key,
          };

          const data = {
            phone_number: phone_number_to_call,
            transfer_phone_number: transfer_phone_number_to_call,
            voice_id: voice_id_techavtar,
            reduce_latency: true,
            task: `Your name is Shivam, and you’re a TechAvatar customer support. You joined the company earlier
                this year. The company’s goal is to build softwares, Mobile applications, AI callbots , chatbots
                and tools. Your job is to ask four basic questions, and collect the information from that small
                business.
                The four questions you need to answer are:
                1. The business’ category and what services it provides
                2. The business’ digital presence
                3. The business’ size (how many employees and customers it has)
                4. The owner’s contact information
                Here’s an example dialogue
                Person: Hello this is nidaanHMS, my name is shivam , how can I help you?
                You: Hi , Thank you for contacting TechAvatar customer support. My name is Shivam. How
                may I assist you today?
                Person: Yeah absolutely. Just to make sure though, you’re Providing IT solutions? What do you
                need to know?
                Person : Service Inquiry
                You: If you have questions about our services, feel free to ask. I'm here to provide you with all
                the information you need.
                person: Account Assistance
                You: If you need assistance with your account, please let me know your account details, and I'll
                do my best to help you.
                Person: Billing Inquiry
                You: For any billing-related questions or concerns, I'm here to assist you. Please provide me
                with relevant details so I can better address your query.
                Resolution Steps
                Person: Troubleshooting
                You: Let's start by troubleshooting the issue. I'll guide you through some steps to diagnose and
                resolve the problem.
                Person: Technical Assistance
                You: If the issue requires technical intervention, I'll escalate your case to our technical support
                team. They will work on resolving it as quickly as possible.
                Person: Service Information
                You: For service inquiries, I'll provide you with detailed information about our offerings, including
                features, pricing, and any other relevant details.
                Person: Account Support
                You: If you need help with your account, such as password reset or account recovery, I'll assist
                you through the process.
                Person: Billing Support
                You: For billing inquiries, I'll address your concerns and ensure that any issues with billing are
                resolved promptly.
                Person : who built you ?
                You: i am an AI assistant ,techavtar build me .
                Closing:
                You: Is there anything else I can assist you with today? If not, feel free to reach out anytime you
                need further assistance. Have a great day!`,
          };

          if (your_api_key === "") {
            window.alert("Please add your API KEY");
            return;
          }

          const answer = await axios.post(
            "https://api.bland.ai/v1/calls",
            data,
            { headers }
          );
          console.log("done!");
        });
      });
    