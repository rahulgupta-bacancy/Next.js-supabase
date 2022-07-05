import supabase from "../../utils/supabase";
module.exports = async (req, res) => {
  const data = await supabase.auth.signOut();
  return res.send(data);
};
