import supabase from "../../utils/supabase";
module.exports = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const data = await supabase.auth.signUp({ email, password });
  console.log(req.body);
  return res.send(data);
};
