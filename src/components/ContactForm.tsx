export const ContactForm = () => {
	return (
		<form action="https://formspree.io/techwomen.no@gmail.com" method="POST">
			<p class="mb-4">
				Please send your message to Tech Women Norway. We will reply as soon as
				possible!
			</p>
			<div class="row">
				<div class="col">
					<input
						class="form-control"
						type="text"
						name="name"
						placeholder="Name*"
						required
					/>
				</div>
				<div class="col">
					<input
						class="form-control"
						type="email"
						name="_replyto"
						placeholder="E-mail Address*"
						required
					/>
				</div>
			</div>
			<textarea
				rows={8}
				class="form-control mt-3 mb-3"
				name="message"
				placeholder="Message*"
				required
			></textarea>
			<button type="submit" class="btn btn-success" value={'Send'}>
				Send
			</button>
		</form>
	)
}
