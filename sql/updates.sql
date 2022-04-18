--- Update user profile in portfolioController (PUT request)
UPDATE residents
SET firstname=$1, lastname=$2, linkedin=$4, github=$3, snake_game=$5,
chrome_extension=$6, solo=$7, scratch=$8, iteration=$9, osp_repo=$10,
osp_website=$11, osp_article=$12, reinforcement=$13
WHERE resident_id='<user-id>'