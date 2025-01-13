function status(request, response) {
  response.status(200).json({ desc: "valor" });
}

export default status;
