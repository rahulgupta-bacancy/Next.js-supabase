import supabase from "../../utils/supabase";
module.exports = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const data = await supabase.auth.signIn({ email, password });
  console.log(req.body.email);
  return res.send(data);
};
