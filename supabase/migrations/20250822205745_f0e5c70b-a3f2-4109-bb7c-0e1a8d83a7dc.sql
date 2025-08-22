-- Enable required extension for password hashing
create extension if not exists pgcrypto with schema public;