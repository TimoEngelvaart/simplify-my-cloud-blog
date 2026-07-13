---
title: "Power Automate Approvals in Microsoft Teams (2026 New Designer Tutorial)"
date: 2026-07-13
pubDate: 2026-07-13 #Y-M-D
author: "Timo Engelvaart"
image: { url: "/power-automate-approvals-teams-2026.png", alt: "Power Automate Approvals in Microsoft Teams - 2026 New Designer Tutorial" }
tags: ["Power Automate", "Microsoft Teams", "Approvals", "Power Platform", "Microsoft 365"]
description: "Build a complete approval flow in the new 2026 Power Automate designer. A Microsoft Form triggers it, an approve/reject card lands in Teams, and the decision goes back to the requester by email."
youtubeId: "UOtLJhV8s44"
---

Most approval requests end up in someone's inbox, buried under twenty other things. The requester waits. The approver forgets. Someone follows up three days later asking what happened. It's a bad loop, and Power Automate can break it.

This tutorial walks through building an approval flow entirely in the new 2026 designer. A Microsoft Form triggers it, the approver gets a card directly in Microsoft Teams, and the requester receives an email with the outcome as soon as a decision is made. The whole thing takes about fifteen minutes to set up.

One reason I made this video: almost every approval tutorial you'll find online was recorded in the old Power Automate designer. If you've been following a walkthrough and your screen looks nothing like the screenshots, that's why. The new designer is what you see now, and this is built for it.

## Prerequisites: Set Up Your Microsoft Form First

Before opening Power Automate, you need a form configured correctly. I used an IT Support Request form with three questions: Your name (short text), Describe your issue (long text), and Priority (choice: High, Medium, or Low). The specific questions don't matter much. What does matter are two settings in the form configuration.

Open the form, go to the settings (the three dots at the top right), and find "Who can fill out this form". Change it from "Anyone can respond" to "Only people in my organization can respond". Then scroll down and toggle on "Record name".

That second toggle is the one people miss. Without it, Forms doesn't store the respondent's email address. No email address means nothing to put in the "Send to" field later in the flow, and the whole thing falls apart.

<!-- SCREENSHOT: Microsoft Forms settings panel showing "Only people in my organization" selected and "Record name" toggled on -->

## Step 1: Trigger When a New Response Is Submitted

Go to [make.powerautomate.com](https://make.powerautomate.com) and create a new automated cloud flow. Search for "Microsoft Forms" and select the trigger "When a new response is submitted". Choose your form from the dropdown.

<!-- SCREENSHOT: The trigger step in the new 2026 designer with the form selected -->

## Step 2: Get Response Details

Add a new step. Search for "Microsoft Forms" again and this time choose "Get response details". Set the Form Id to your form. For Response Id, use the dynamic value "List of response notifications Response Id" from the trigger step.

This is what actually pulls the answers out of the submission. The trigger just tells you something was submitted. This step gives you the content.

<!-- SCREENSHOT: Get response details step with Form Id and Response Id filled in -->

## Step 3: Start and Wait for an Approval

Add another step and search for "Approvals". Select "Start and wait for an approval".

Set Approval type to "Approve/Reject - First to respond". Give it a title that identifies the request, something like the form's Responders' Name in it. For Assigned to, use the Responders' Email dynamic value from the "Get response details" step. That's a real email address tied to a real account in your organization. Fill in the Details field with whatever the approver needs to make a decision: the issue description, the priority, anything useful from the form.

The Assigned to field is the one that trips people up most often. I'll cover exactly what breaks in a moment.

<!-- SCREENSHOT: Start and wait for an approval step with all fields filled in, Responders' Email in the Assigned to field -->

## Step 4: Add a Condition on the Outcome

Add a Control step and choose "Condition". In the left-hand value, insert the "Outcome" dynamic value from the approval step. Set the operator to "is equal to". In the right-hand field, type exactly: `Approve`.

Not "Approved". Not "approved". Just "Approve". The value Power Automate returns is precisely that string, and if your condition doesn't match it exactly, everyone will get the rejection email regardless of what the approver clicked. I'll explain this in more detail below too.

<!-- SCREENSHOT: Condition step with Outcome "is equal to" "Approve" -->

## Step 5: Send the Result by Email

In the True branch (the request was approved), add an Office 365 Outlook step: "Send an email (V2)". Set the To field to Responders' Email from the form response. Write a subject and body confirming approval.

In the False branch (rejected), add the same action with the same To address. Write a message explaining the request wasn't approved, and include whatever next steps make sense for your use case.

<!-- SCREENSHOT: True branch with the approval email, and False branch with the rejection email -->

---

## Error: "assignedTo contained no valid users in the organization"

I hit this one while filming. The flow runs, then fails before the approval card is ever sent, with a message that says something like "assignedTo contained no valid users in the organization".

The cause is almost always the Assigned to field in the approval step. If you dragged in a name field from the form, for example the "Your name" text field where someone typed their actual name, Power Automate passes that string to Entra ID and tries to resolve it as a user account. It can't, so it fails.

Fix: use Responders' Email from the "Get response details" step instead of any name field. That's what you need. An email address, not a display name typed into a text box.

<!-- SCREENSHOT: The error in the flow run history, and the corrected Assigned to field showing Responders' Email -->

## Error: The Condition Never Matches and Everyone Gets a Rejection Email

This one is more annoying because the flow doesn't fail. It runs successfully every time. It just always sends the rejection email, even when the approver clicked Approve.

The culprit is almost always the right-hand value in the Condition step. If you typed "Approved" instead of "Approve", the condition will never be true. Power Automate returns the string "Approve" when an approval is granted and "Reject" when it isn't. One extra letter in your condition, and the True branch never runs.

Open the Condition, change "Approved" to "Approve", save, and test again. That's usually all it takes.

<!-- SCREENSHOT: The Condition step with the incorrect "Approved" value, and then the corrected "Approve" value -->

---

## Testing the Flow

Submit your form as a test respondent. Then go to [make.powerautomate.com](https://make.powerautomate.com), click Approvals in the left nav, and select Received. The Teams Approvals app can be slow to sync, so the portal is the more reliable place to confirm the card is there.

Approve or reject the test request, then check whether the right email landed. If something went wrong, the flow run history under My flows will show you exactly which step failed and what the error was. That's your starting point for debugging.

<!-- SCREENSHOT: The approval card in the Power Automate portal under Approvals > Received -->

## What's Next

The next tutorial covers agent flows. Rather than routing every request to a human the moment a form is submitted, an AI reviews it first and only escalates the ones that genuinely need a decision. Routine requests get handled automatically. Ambiguous ones get the Teams card. That's where this starts to get really interesting.

*Subscribe to [Simplify My Cloud on YouTube](https://www.youtube.com/@simplifymycloud) so you don't miss it when it drops.*
