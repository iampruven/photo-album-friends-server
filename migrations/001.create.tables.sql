begin;

create table users (
    id serial primary key,
    username varchar(255) not null unique,
    password varchar(255) not null
);

create table grouping (
    id serial primary key,
    name varchar(255) not null 
);

create table users_group(
    id serial primary key,
    user_id integer not null references users(id),
    group_id integer not null references grouping(id),
    date_joined timestamp not null default (now() at time zone 'utc')
);

create table post (
    id serial primary key,
    user_id integer not null references users(id),
    group_id integer not null references grouping(id),
    date_posted timestamp not null default (now() at time zone 'utc'),
    description text not null,
    img_url varchar(255) not null
);

create table comments(
    id serial primary key,
    post_id integer not null references post(id),
    user_id integer not null references users(id),
    comment text not null
);

create table likes(
    id serial primary key,
    post_id integer not null references post(id),
    user_id integer not null references users(id)
);



commit;
