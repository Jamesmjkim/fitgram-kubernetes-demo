CREATE TABLE public.users (
	"id" serial NOT NULL,
	"user_name" TEXT NOT NULL,
	"first_name" TEXT NOT NULL,
	"last_name" TEXT NOT NULL,
	"email" TEXT NOT NULL,
	"height" float8,
	"weight" float8,
	"password" TEXT NOT NULL,
	CONSTRAINT "users_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE public.workouts (
	"id" serial NOT NULL,
	"name" TEXT NOT NULL,
	"description" TEXT NOT NULL,
	CONSTRAINT "workouts_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE public.routines (
	"id" serial NOT NULL,
	"owner_user_id" int NOT NULL,
	"name" TEXT NOT NULL,
	"duration" int NOT NULL,
	CONSTRAINT "routines_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE public.routine_workout (
	"id" serial NOT NULL,
	"routine_id" int NOT NULL,
	"workout_id" int NOT NULL,
	"set" int,
	"repetition_motion" int,
	"day" int,
	"weight" int,
	CONSTRAINT "routine_workout_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE public.forums(
	"id" serial NOT NULL,
	"owner_user_id" int NOT NULL,
	"routine_id" int NOT NULL,
	"name" TEXT NOT NULL,
	"likes" int NOT NULL,
	"dislikes" int NOT NULL,
	"date_created" TIMESTAMP NOT NULL,
	CONSTRAINT "forums_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE public.comments (
	"id" serial NOT NULL,
	"owner_user_id" int NOT NULL,
	"forum_id" int NOT NULL,
	"description" TEXT NOT NULL,
	"date_created" TIMESTAMP NOT NULL,
	CONSTRAINT "comments_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE public.messages (
	"id" serial,
	"sender_id" int NOT NULL,
	"recepient_id" int NOT NULL,
	"description" TEXT NOT NULL,
	"date_created" TIMESTAMP NOT NULL
) WITH (
  OIDS=FALSE
);


CREATE TABLE public.sessions (
	"id" serial NOT NULL,
	"token" TEXT NOT NULL,
	"user_id" int NOT NULL,
	"date_created" TIMESTAMP NOT NULL,
	CONSTRAINT "sessions_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
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







