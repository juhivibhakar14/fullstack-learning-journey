function FormSubmit() {

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault();
  console.log("Form Submitted");
}

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" />
            <button type="submit">
                Submit
            </button>
        </form>
    );
}

export default FormSubmit;