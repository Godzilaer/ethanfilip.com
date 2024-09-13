class Game
{
    constructor(name, logo, url)
    {
        this.name = name;
        this.logo = logo;
        this.url = url;
    }
}

const games = [
    new Game("Testing 123", "/assets/images/logo.png", "")
]

games.forEach(AddGames);

function AddGames(item, index)
{

}