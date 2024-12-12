--
-- PostgreSQL database dump
--

-- Dumped from database version 17.2
-- Dumped by pg_dump version 17.2

-- Started on 2024-12-11 21:55:39

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 222 (class 1259 OID 16417)
-- Name: accommodation_type; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.accommodation_type (
    id integer NOT NULL,
    name character varying(50) NOT NULL,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


--
-- TOC entry 224 (class 1259 OID 16431)
-- Name: accommodations; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.accommodations (
    id integer NOT NULL,
    hotel_id integer NOT NULL,
    room_type_id integer NOT NULL,
    accommodation_id integer NOT NULL,
    room_number character varying(50) NOT NULL,
    status character varying(50) DEFAULT 'Disponible'::character varying,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


--
-- TOC entry 221 (class 1259 OID 16416)
-- Name: accommodations_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.accommodations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 4877 (class 0 OID 0)
-- Dependencies: 221
-- Name: accommodations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.accommodations_id_seq OWNED BY public.accommodation_type.id;


--
-- TOC entry 218 (class 1259 OID 16395)
-- Name: hotels; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.hotels (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    address character varying(255) NOT NULL,
    city character varying(255) NOT NULL,
    nit character varying(20) NOT NULL,
    max_rooms integer NOT NULL,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


--
-- TOC entry 217 (class 1259 OID 16394)
-- Name: hotels_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.hotels_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 4878 (class 0 OID 0)
-- Dependencies: 217
-- Name: hotels_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.hotels_id_seq OWNED BY public.hotels.id;


--
-- TOC entry 220 (class 1259 OID 16408)
-- Name: room_types; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.room_types (
    id integer NOT NULL,
    name character varying(50) NOT NULL,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


--
-- TOC entry 219 (class 1259 OID 16407)
-- Name: room_types_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.room_types_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 4879 (class 0 OID 0)
-- Dependencies: 219
-- Name: room_types_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.room_types_id_seq OWNED BY public.room_types.id;


--
-- TOC entry 223 (class 1259 OID 16430)
-- Name: rooms_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.rooms_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 4880 (class 0 OID 0)
-- Dependencies: 223
-- Name: rooms_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.rooms_id_seq OWNED BY public.accommodations.id;


--
-- TOC entry 4697 (class 2604 OID 16420)
-- Name: accommodation_type id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.accommodation_type ALTER COLUMN id SET DEFAULT nextval('public.accommodations_id_seq'::regclass);


--
-- TOC entry 4700 (class 2604 OID 16434)
-- Name: accommodations id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.accommodations ALTER COLUMN id SET DEFAULT nextval('public.rooms_id_seq'::regclass);


--
-- TOC entry 4691 (class 2604 OID 16398)
-- Name: hotels id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.hotels ALTER COLUMN id SET DEFAULT nextval('public.hotels_id_seq'::regclass);


--
-- TOC entry 4694 (class 2604 OID 16411)
-- Name: room_types id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.room_types ALTER COLUMN id SET DEFAULT nextval('public.room_types_id_seq'::regclass);


--
-- TOC entry 4869 (class 0 OID 16417)
-- Dependencies: 222
-- Data for Name: accommodation_type; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.accommodation_type VALUES (1, 'Sencilla', '2024-12-03 20:37:41.522882', '2024-12-03 20:37:41.522882');
INSERT INTO public.accommodation_type VALUES (2, 'Doble', '2024-12-03 20:37:41.522882', '2024-12-03 20:37:41.522882');
INSERT INTO public.accommodation_type VALUES (3, 'Triple', '2024-12-03 20:37:41.522882', '2024-12-03 20:37:41.522882');


--
-- TOC entry 4871 (class 0 OID 16431)
-- Dependencies: 224
-- Data for Name: accommodations; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.accommodations VALUES (1, 1, 1, 1, '101', 'Disponible', '2024-12-03 20:39:19.233787', '2024-12-03 20:39:19.233787');
INSERT INTO public.accommodations VALUES (2, 1, 1, 2, '102', 'Disponible', '2024-12-03 20:39:19.233787', '2024-12-03 20:39:19.233787');
INSERT INTO public.accommodations VALUES (3, 1, 2, 3, '201', 'Disponible', '2024-12-03 20:39:19.233787', '2024-12-03 20:39:19.233787');
INSERT INTO public.accommodations VALUES (4, 1, 3, 1, '301', 'Disponible', '2024-12-03 20:39:19.233787', '2024-12-03 20:39:19.233787');


--
-- TOC entry 4865 (class 0 OID 16395)
-- Dependencies: 218
-- Data for Name: hotels; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.hotels VALUES (1, 'Decameron Cartagena', 'Calle 23 58-25', 'Cartagena', '12345678-9', 42, '2024-12-03 20:39:07.985899', '2024-12-03 20:39:07.985899');
INSERT INTO public.hotels VALUES (2, 'Hotel 2', 'Avenida Playa 123', 'Barranquilla', '12345678-0', 50, '2024-12-11 17:01:21.858899', '2024-12-11 17:01:21.858899');
INSERT INTO public.hotels VALUES (3, 'Hotel 3', 'Calle 123 ', 'Cali', '12345558-1', 28, '2024-12-11 17:03:20.465098', '2024-12-11 17:03:20.465098');
INSERT INTO public.hotels VALUES (4, 'Hotel 4', 'Carrera 5', 'Medellin', '33345558-1', 30, '2024-12-11 17:03:41.450602', '2024-12-11 17:03:41.450602');
INSERT INTO public.hotels VALUES (5, 'Hotel 5', 'Avenida 13 con calle 40', 'Bogota', '123678-0', 5, '2024-12-11 17:38:28.725419', '2024-12-11 17:38:28.725419');
INSERT INTO public.hotels VALUES (6, 'Hotel 6', 'Avenida 5 ', 'Santander', '12367758-8', 6, '2024-12-11 17:40:02.214732', '2024-12-11 17:40:02.214732');


--
-- TOC entry 4867 (class 0 OID 16408)
-- Dependencies: 220
-- Data for Name: room_types; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.room_types VALUES (1, 'Estándar', '2024-12-03 20:37:05.418059', '2024-12-03 20:37:05.418059');
INSERT INTO public.room_types VALUES (2, 'Junior', '2024-12-03 20:37:05.418059', '2024-12-03 20:37:05.418059');
INSERT INTO public.room_types VALUES (3, 'Suite', '2024-12-03 20:37:05.418059', '2024-12-03 20:37:05.418059');


--
-- TOC entry 4881 (class 0 OID 0)
-- Dependencies: 221
-- Name: accommodations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.accommodations_id_seq', 7, true);


--
-- TOC entry 4882 (class 0 OID 0)
-- Dependencies: 217
-- Name: hotels_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.hotels_id_seq', 47, true);


--
-- TOC entry 4883 (class 0 OID 0)
-- Dependencies: 219
-- Name: room_types_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.room_types_id_seq', 3, true);


--
-- TOC entry 4884 (class 0 OID 0)
-- Dependencies: 223
-- Name: rooms_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.rooms_id_seq', 33, true);


--
-- TOC entry 4711 (class 2606 OID 16424)
-- Name: accommodation_type accommodations_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.accommodation_type
    ADD CONSTRAINT accommodations_pkey PRIMARY KEY (id);


--
-- TOC entry 4705 (class 2606 OID 16406)
-- Name: hotels hotels_nit_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.hotels
    ADD CONSTRAINT hotels_nit_key UNIQUE (nit);


--
-- TOC entry 4707 (class 2606 OID 16404)
-- Name: hotels hotels_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.hotels
    ADD CONSTRAINT hotels_pkey PRIMARY KEY (id);


--
-- TOC entry 4709 (class 2606 OID 16415)
-- Name: room_types room_types_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.room_types
    ADD CONSTRAINT room_types_pkey PRIMARY KEY (id);


--
-- TOC entry 4713 (class 2606 OID 16439)
-- Name: accommodations rooms_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.accommodations
    ADD CONSTRAINT rooms_pkey PRIMARY KEY (id);


--
-- TOC entry 4715 (class 2606 OID 16441)
-- Name: accommodations rooms_room_number_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.accommodations
    ADD CONSTRAINT rooms_room_number_key UNIQUE (room_number);


--
-- TOC entry 4716 (class 2606 OID 16452)
-- Name: accommodations rooms_accommodation_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.accommodations
    ADD CONSTRAINT rooms_accommodation_id_fkey FOREIGN KEY (accommodation_id) REFERENCES public.accommodation_type(id);


--
-- TOC entry 4717 (class 2606 OID 16442)
-- Name: accommodations rooms_hotel_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.accommodations
    ADD CONSTRAINT rooms_hotel_id_fkey FOREIGN KEY (hotel_id) REFERENCES public.hotels(id);


--
-- TOC entry 4718 (class 2606 OID 16447)
-- Name: accommodations rooms_room_type_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.accommodations
    ADD CONSTRAINT rooms_room_type_id_fkey FOREIGN KEY (room_type_id) REFERENCES public.room_types(id);


-- Completed on 2024-12-11 21:55:39

--
-- PostgreSQL database dump complete
--

