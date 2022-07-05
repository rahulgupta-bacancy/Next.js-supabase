import supabase from "../../utils/supabase";
module.exports = async (req, res) => {
  const email = req.body.email;
  const data = await supabase.auth.signIn({ email });
  console.log(req.body.email);
  return res.send(data);
};
