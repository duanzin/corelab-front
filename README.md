# CoreNotes

> a web app to create to-do notes made with react, vite and typescript

![chalegif](https://github.com/duanzin/corelab-front/assets/115566934/8e46ccbe-78b8-4a03-82bf-1da4aabde444)
![chaleg2gif](https://github.com/duanzin/corelab-front/assets/115566934/27e4381a-f00a-492c-a1e6-b66a1ab5cf99)

## Setting up

Before anything, remember to set up the [back end](https://github.com/duanzin/corelab-back) of this project first. After that, clone this repo and install all dependencies using:
```
npm i
```
To connect to the api, create an `.env` file based on the `.env.example`, where you will put your api url.
## Running the project

To start the app, run the following command

```
npm run dev
```

## Using the app
### Creating a note

Form creation is made using the form at the top center of the page, write your title and the main content of the page in the "Titulo" and "Criar nota..." spaces respectively, then click the "Enviar" button.
The new note will be displayed in the "Outras" section, colored white and unfavorited by default.

### Deleting notes

To delete a note, simply click the X on the bottom right of the note.

### Altering notes

You can alter a note by changing its color, its content and title and its status as favorite

#### Favoriting notes

To mark a note as favorite, click the star on the top right of the note. It will now be displayed in the "Favoritos" section. 
Clicking the star again will unfavorite it and send it back to the "Outras" section.

#### Changing color

To change a note's color, click the paint bucket in the bottom center of the note then click one of the colored circles that show up.
Currently theres no way to set a note to the default white color.

#### Editing a note

To edit a note's content, click the pencil on the bottom right of the note. You can then alter its title and text, then click the paper plane at the bottom right to send the updated note to the database.
Clicking the pen while in editing mode will cancel the edit.

### Filtering notes

You can filter a note by its title or color.
To filter notes by title, simply type the title on the search bar at the top of the page and it will render notes whose titles contain the searched substring.
To filter by color, click the "Filtrar por cores" button then one of the colored circles that show up. The page will render notes with the selected color. 
Theres currently no way to filter only default white notes.
In order to show all notes again, simply press enter on the search bar while its blank.

