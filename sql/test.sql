SELECT CONCAT(a.first_name,' ',a.last_name), GROUP_CONCAT(f.title)
FROM actor a
INNER JOIN film_actor fa
ON a.actor_id = fa.actor_id
INNER JOIN film f
ON fa.film_id = f.film_id
GROUP BY a.first_name, a.last_name
LIMIT 10;