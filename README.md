# MachineLearningWithMelee

This project uses machine learning libraries to classify who the winner of a Super Smash Brother's Melee match was depending on game stats. It was built as a final project for my Machine Learning Fundamentals class and along with this project, I uploaded a [2 minute video](https://www.youtube.com/watch?v=rqAENsoV8m0) summarizing the project.

It uses [slippi-js](https://github.com/project-slippi/slippi-js) to parse the .slp (slippi) files which are the replays of a match played between people. It also uses [scikit-learn](https://scikit-learn.org/stable/) for model training.

The replays are not included with this repo because there was **5GB worth of replays** to be parsed and a **200MB resulting json file** for importing to the Jupyter Notebook.
