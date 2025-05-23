PGDMP                      }            gestion_de_consultorio    16.8    16.8 #    6           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            7           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            8           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            9           1262    40960    gestion_de_consultorio    DATABASE     |   CREATE DATABASE gestion_de_consultorio WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'es-MX';
 &   DROP DATABASE gestion_de_consultorio;
                postgres    false            �            1259    40978    citas    TABLE     �   CREATE TABLE public.citas (
    id integer NOT NULL,
    paciente_id integer,
    medico_id integer,
    fecha_hora timestamp without time zone,
    estado character varying(20)
);
    DROP TABLE public.citas;
       public         heap    postgres    false            �            1259    40977    citas_id_seq    SEQUENCE     �   CREATE SEQUENCE public.citas_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.citas_id_seq;
       public          postgres    false    220            :           0    0    citas_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.citas_id_seq OWNED BY public.citas.id;
          public          postgres    false    219            �            1259    40995 	   consultas    TABLE     �   CREATE TABLE public.consultas (
    id integer NOT NULL,
    cita_id integer,
    sintomas text,
    diagnostico text,
    tratamiento text,
    notas text
);
    DROP TABLE public.consultas;
       public         heap    postgres    false            �            1259    40994    consultas_id_seq    SEQUENCE     �   CREATE SEQUENCE public.consultas_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.consultas_id_seq;
       public          postgres    false    222            ;           0    0    consultas_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.consultas_id_seq OWNED BY public.consultas.id;
          public          postgres    false    221            �            1259    40971    medicos    TABLE     �   CREATE TABLE public.medicos (
    id integer NOT NULL,
    nombre character varying(100),
    apellido character varying(100),
    especialidad character varying(100),
    correo character varying(150),
    telefono character varying(20)
);
    DROP TABLE public.medicos;
       public         heap    postgres    false            �            1259    40970    medicos_id_seq    SEQUENCE     �   CREATE SEQUENCE public.medicos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.medicos_id_seq;
       public          postgres    false    218            <           0    0    medicos_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.medicos_id_seq OWNED BY public.medicos.id;
          public          postgres    false    217            �            1259    40962 	   pacientes    TABLE       CREATE TABLE public.pacientes (
    id integer NOT NULL,
    nombre character varying(100),
    apellido character varying(100),
    fecha_nacimiento date,
    sexo character varying(10),
    correo character varying(150),
    telefono character varying(20),
    direccion text
);
    DROP TABLE public.pacientes;
       public         heap    postgres    false            �            1259    40961    pacientes_id_seq    SEQUENCE     �   CREATE SEQUENCE public.pacientes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.pacientes_id_seq;
       public          postgres    false    216            =           0    0    pacientes_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.pacientes_id_seq OWNED BY public.pacientes.id;
          public          postgres    false    215            �           2604    40981    citas id    DEFAULT     d   ALTER TABLE ONLY public.citas ALTER COLUMN id SET DEFAULT nextval('public.citas_id_seq'::regclass);
 7   ALTER TABLE public.citas ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    219    220    220            �           2604    40998    consultas id    DEFAULT     l   ALTER TABLE ONLY public.consultas ALTER COLUMN id SET DEFAULT nextval('public.consultas_id_seq'::regclass);
 ;   ALTER TABLE public.consultas ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    222    221    222            �           2604    40974 
   medicos id    DEFAULT     h   ALTER TABLE ONLY public.medicos ALTER COLUMN id SET DEFAULT nextval('public.medicos_id_seq'::regclass);
 9   ALTER TABLE public.medicos ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    218    217    218            �           2604    40965    pacientes id    DEFAULT     l   ALTER TABLE ONLY public.pacientes ALTER COLUMN id SET DEFAULT nextval('public.pacientes_id_seq'::regclass);
 ;   ALTER TABLE public.pacientes ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    216    215    216            1          0    40978    citas 
   TABLE DATA           O   COPY public.citas (id, paciente_id, medico_id, fecha_hora, estado) FROM stdin;
    public          postgres    false    220   �&       3          0    40995 	   consultas 
   TABLE DATA           [   COPY public.consultas (id, cita_id, sintomas, diagnostico, tratamiento, notas) FROM stdin;
    public          postgres    false    222   Y'       /          0    40971    medicos 
   TABLE DATA           W   COPY public.medicos (id, nombre, apellido, especialidad, correo, telefono) FROM stdin;
    public          postgres    false    218   �(       -          0    40962 	   pacientes 
   TABLE DATA           n   COPY public.pacientes (id, nombre, apellido, fecha_nacimiento, sexo, correo, telefono, direccion) FROM stdin;
    public          postgres    false    216   �)       >           0    0    citas_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.citas_id_seq', 5, true);
          public          postgres    false    219            ?           0    0    consultas_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.consultas_id_seq', 5, true);
          public          postgres    false    221            @           0    0    medicos_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.medicos_id_seq', 5, true);
          public          postgres    false    217            A           0    0    pacientes_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.pacientes_id_seq', 5, true);
          public          postgres    false    215            �           2606    40983    citas citas_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.citas
    ADD CONSTRAINT citas_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.citas DROP CONSTRAINT citas_pkey;
       public            postgres    false    220            �           2606    41002    consultas consultas_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.consultas
    ADD CONSTRAINT consultas_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.consultas DROP CONSTRAINT consultas_pkey;
       public            postgres    false    222            �           2606    40976    medicos medicos_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.medicos
    ADD CONSTRAINT medicos_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.medicos DROP CONSTRAINT medicos_pkey;
       public            postgres    false    218            �           2606    40969    pacientes pacientes_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.pacientes
    ADD CONSTRAINT pacientes_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.pacientes DROP CONSTRAINT pacientes_pkey;
       public            postgres    false    216            �           2606    40989    citas citas_medico_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.citas
    ADD CONSTRAINT citas_medico_id_fkey FOREIGN KEY (medico_id) REFERENCES public.medicos(id) ON DELETE CASCADE;
 D   ALTER TABLE ONLY public.citas DROP CONSTRAINT citas_medico_id_fkey;
       public          postgres    false    220    4757    218            �           2606    40984    citas citas_paciente_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.citas
    ADD CONSTRAINT citas_paciente_id_fkey FOREIGN KEY (paciente_id) REFERENCES public.pacientes(id) ON DELETE CASCADE;
 F   ALTER TABLE ONLY public.citas DROP CONSTRAINT citas_paciente_id_fkey;
       public          postgres    false    216    4755    220            �           2606    41003     consultas consultas_cita_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.consultas
    ADD CONSTRAINT consultas_cita_id_fkey FOREIGN KEY (cita_id) REFERENCES public.citas(id) ON DELETE CASCADE;
 J   ALTER TABLE ONLY public.consultas DROP CONSTRAINT consultas_cita_id_fkey;
       public          postgres    false    220    4759    222            1   h   x�e�M
� ���x
/`�XBz�6CI�ʐ�ON��|�#��E�:C�F�`�i�<����ы����B}��)n���5��>/}��8�ncQS��*���*�      3   H  x�M�=NA�k�)| ��D���B���qf�bivf�'Hp�)P:ڹ	Z������l%�g;e䌉pN�a��J�[剰���w8�k��H[
¹2Rj%$���b���}m���)�_݂�^~��[�7y�L��s�>�8�U���NV�$��<񸗩����@s�L�
p'�S���{��1��}gU
\i*�ש������H�đ�ĪkZ;��D�V�Q�5��	h��	n�z\ʁE�p��Qh��d�ˀ���7��=�pWg�耴�O���� �R��P��\�:�\����V�7�-&�Ĩl%;���$���0?�԰�      /   �   x�u�;�0�g�0��3j+���G��܆0q�^�U�������NG�Sp����3���̍1t��vZ��G�����i�f�A�c��+�j퍿���p9�|�5x�|@Cv,����^vp���6Ⴜ�ڑ�'�,�2O)$�)����cNԅ��P#[pVqM�?�s�      -     x�]�Mn�0������l'����j��n�An�L�E{�.��r�:$�6y�x�)X���o�@es�eʕ����-	�D�ǿ�£ubC�1J'���`���u3Y�z��ɒ��-8����G4�\N����զv��9&��X,�t��{y>�z�oY�X�5mC��Q�͹���ɮ�D����7�Nz�g�������D��a��m�9���\���?�F��ۄ�#�<�-<�;f��vm�Q
��)�aL��'�|zE;���Ɩד��p3���]0���7�T     