export default {

	sendMessages: () => {
		if(discordSwitch.isSwitchedOn){
			discordAPI.run()
			const succesMessage1 = `Discord message sent to ${List1.selectedItem.MailingList} server`
			showAlert(succesMessage1,'success')
		}
		if(emailSwitch.isSwitchedOn){
			sendEmail.run()
			const succesMessage2 = `Email sent to users on ${List1.selectedItem.MailingList} list`
			showAlert(succesMessage2,'success')
		}
		resetWidget('message_modal')
		closeModal('message_modal')
	}
}