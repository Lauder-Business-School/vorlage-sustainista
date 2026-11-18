-- Nur in einem eigenen, neuen Supabase-Projekt mit fiktiven Daten ausführen.
create table public.lehrveranstaltung_check (
  id integer primary key,
  nachricht text not null
);

insert into public.lehrveranstaltung_check (id, nachricht)
values (1, 'Hallo aus meinem eigenen Supabase-Projekt!');

alter table public.lehrveranstaltung_check enable row level security;
grant select on public.lehrveranstaltung_check to anon;
create policy "Testnachricht darf öffentlich gelesen werden"
  on public.lehrveranstaltung_check for select to anon
  using (true);
