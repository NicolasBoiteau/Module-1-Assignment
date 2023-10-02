-- Insertion de données factices
INSERT INTO films (title, release_year, director)
VALUES
    ('Star Wars: Episode IV - A New Hope', 1977, 'George Lucas'),
    ('Star Wars: Episode V - The Empire Strikes Back', 1980, 'Irvin Kershner'),
    ('Star Wars: Episode VI - Return of the Jedi', 1983, 'Richard Marquand');

INSERT INTO users (username, email, registration_date)
VALUES
    ('nicolas', 'nicolas@email.com', '2023-01-15'),
    ('marwan', 'benselma@email.com', '2023-02-20'),
    ('dorianne', 'dodolastico@email.com', '2023-03-25');

INSERT INTO ratings (user_id, film_id, rating, review)
VALUES
    (1, 1, 5, 'Awesome movie!'),
    (2, 1, 4, 'Great classic.'),
    (3, 2, 5, 'Even better than the first one!');

INSERT INTO characters (name, species, homeworld)
VALUES
    ('Luke Skywalker', 'Human', 'Tatooine'),
    ('Darth Vader', 'Human', 'Unknown'),
    ('Yoda', 'Unknown', 'Dagobah');
