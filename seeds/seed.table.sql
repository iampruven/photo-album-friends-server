begin;

insert into users
(id, username, password)
values
(1, 'tester1@gmail.com', 'testing1!'),
(2, 'vanilla2k@yahoo.com', 'drpepper');

insert into grouping
(id, name)
values
(1,'memories with friends');

insert into users_group
(id, user_id, group_id, date_joined)
values
(1,1,1,now()),
(2,2,1,now());

insert into post
(id, user_id, group_id, date_posted, description, img_url)
values
(1, 1, 1, now(), 'Peaceful puggle enjoying its time. So photogenic', 'https://images.unsplash.com/photo-1541336187922-bffa4ef13d45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'),
(2, 1, 1, now(), 'Serene, they are everywhere for people to enjoy.', 'https://images.unsplash.com/photo-1598610618883-fdedc2e24e3a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80' ),
(3, 2, 1, now(), 'My ideal decoration. I love books.', 'https://images.unsplash.com/photo-1596388631424-2929c72c5552?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60');

insert into comments
(id, post_id, user_id, comment)
values
(1, 1, 1,'You are awesome!'),
(2, 1, 2,'Adorable puggle'),
(3, 2, 2, 'Best thing I ever seen!'),
(4, 2, 1, 'Thats my ideal too!'),
(5, 1, 1, 'Let me borrow some books'),
(6, 1, 2, 'Just kidding!');

insert into likes
(id, post_id, user_id)
values
(1,2,1),
(2,1,2),
(3,3,1),
(4,3,2);

commit;