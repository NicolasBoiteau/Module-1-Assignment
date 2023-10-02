-- Sélection de données
-- Requête 1 : Sélectionner tous les utilisateurs
SELECT * FROM users;

-- Requête 2 : Sélectionner les films et leurs notes
SELECT films.title, AVG(ratings.rating) AS avg_rating
FROM films
JOIN ratings ON films.id = ratings.film_id
GROUP BY films.title;

-- Requête 3 : Sélectionner les utilisateurs et les films qu'ils ont notés
SELECT users.username, films.title, ratings.rating
FROM users
JOIN ratings ON users.id = ratings.user_id
JOIN films ON ratings.film_id = films.id;

-- Requête 4 : Sélectionner les personnages et leurs films correspondants
SELECT characters.name, films.title
FROM characters
JOIN films ON characters.id = films.id;
