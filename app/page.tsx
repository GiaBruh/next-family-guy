import Link from "next/link";
import { Container } from "@/components";
import Image from "next/image";
import { getAllCharacters } from "@/lib/characters";

interface Character {
  id: string;
  name: string;
  slug: string;
  skills: string[];
  description: string;
  age: string;
  avatar: string;
  images: string[];
  occupations: string[];
}

interface charactersProps {
  characters: Character[];
}

export default async function Home() {
  const data: charactersProps = await getAllCharacters<charactersProps>();

  return (
    <Container className="grid grid-cols-2 gap-1 py-5 md:grid-cols-3 lg:grid-cols-4">
      {data.characters.map((item) => {
        return (
          <Link
            href={`/characters/${item.slug}`}
            key={item.name}
            className="overflow-hidden rounded-md"
          >
            <Image
              src={item.avatar}
              alt=""
              className="transition-all duration-500 hover:scale-110 hover:-rotate-2"
              width={500}
              height={500}
            />
          </Link>
        );
      })}
    </Container>
  );
}
