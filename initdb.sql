

CREATE TABLE public.comments (
    id serial NOT NULL,
    owner_user_id integer NOT NULL,
    forum_id integer NOT NULL,
    description text,
    date_created timestamp with time zone DEFAULT now(),
	CONSTRAINT "comments_pk" PRIMARY KEY ("id")
);

CREATE TABLE public.forums (
    id serial NOT NULL,
    owner_user_id integer NOT NULL,
    routine_id integer NOT NULL,
    name text,
    likes integer DEFAULT 0,
    dislikes integer DEFAULT 0,
    date_created timestamp with time zone DEFAULT now(),
	CONSTRAINT "forums_pk" PRIMARY KEY ("id")
);

CREATE TABLE public.messages (
    id serial NOT NULL,
    sender_id integer NOT NULL,
    recepient_id integer NOT NULL,
    description text,
    date_created timestamp with time zone DEFAULT now()
);


CREATE TABLE public.routine_workout (
    id serial NOT NULL,
    routine_id integer NOT NULL,
    workout_id integer NOT NULL,
    set integer,
    repetition_motion integer,
    weight integer,
    day text,
	CONSTRAINT "routine_workout_pk" PRIMARY KEY ("id")
);

CREATE TABLE public.routines (
    id serial NOT NULL,
    owner_user_id integer NOT NULL,
    name text NOT NULL,
    duration integer,
	CONSTRAINT "routines_pk" PRIMARY KEY ("id")

);


CREATE TABLE public.sessions (
    id serial NOT NULL,
    token text NOT NULL,
    user_id integer NOT NULL,
    date_created timestamp with time zone DEFAULT now(),
	CONSTRAINT "sessions_pk" PRIMARY KEY ("id")
);

CREATE TABLE public.users (
    id serial NOT NULL,
    user_name text NOT NULL,
    first_name text NOT NULL,
    last_name text NOT NULL,
    email text NOT NULL,
    height double precision,
    weight double precision,
    password text NOT NULL,
	CONSTRAINT "users_pk" PRIMARY KEY ("id")

);

CREATE TABLE public.workouts (
    id serial NOT NULL,
    name text NOT NULL,
    description text NOT NULL,
	CONSTRAINT "workouts_pk" PRIMARY KEY ("id")

);

ALTER TABLE public.routines ADD CONSTRAINT "routines_fk0" FOREIGN KEY ("owner_user_id") REFERENCES public.users("id");

ALTER TABLE public.routine_workout ADD CONSTRAINT "routine_workout_fk0" FOREIGN KEY ("routine_id") REFERENCES public.routines("id");
ALTER TABLE public.routine_workout ADD CONSTRAINT "routine_workout_fk1" FOREIGN KEY ("workout_id") REFERENCES public.workouts("id");

ALTER TABLE public.forums ADD CONSTRAINT "forums_fk0" FOREIGN KEY ("owner_user_id") REFERENCES public.users("id");
ALTER TABLE public.forums ADD CONSTRAINT "forums_fk1" FOREIGN KEY ("routine_id") REFERENCES public.routines("id");

ALTER TABLE public.comments ADD CONSTRAINT "comments_fk0" FOREIGN KEY ("owner_user_id") REFERENCES public.users("id");
ALTER TABLE public.comments ADD CONSTRAINT "comments_fk1" FOREIGN KEY ("forum_id") REFERENCES public.forums("id");

ALTER TABLE public.messages ADD CONSTRAINT "messages_fk0" FOREIGN KEY ("sender_id") REFERENCES public.users("id");
ALTER TABLE public.messages ADD CONSTRAINT "messages_fk1" FOREIGN KEY ("recepient_id") REFERENCES public.users("id");

ALTER TABLE public.sessions ADD CONSTRAINT "sessions_fk0" FOREIGN KEY ("user_id") REFERENCES public.users("id");


INSERT INTO public.workouts ("id", "name", "description") VALUES (1, 'Push up', 'Upper-body');
INSERT INTO public.workouts ("id", "name", "description") VALUES (2, 'Pull up', 'Upper-body');
INSERT INTO public.workouts ("id", "name", "description") VALUES (3, 'Squat', 'Lower-body');
INSERT INTO public.workouts ("id", "name", "description") VALUES (4, 'Deadlift', 'Lower-body');
INSERT INTO public.workouts ("id", "name", "description") VALUES (5, 'Crunches', 'Core');
INSERT INTO public.workouts ("id", "name", "description") VALUES (6, 'Running', 'Whole Body');





