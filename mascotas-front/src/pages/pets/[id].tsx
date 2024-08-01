import { getPetOne, getPets } from '@/backend';
import PetDetail from '@/components/PetDetail'
import { Pet } from '@/interfaces';
import ClientLayout from '@/layout/ClientLayout'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { ParsedUrlQuery } from 'querystring';
import React from 'react'
interface PetsProps {
  pet: Pet;
}

interface Params extends ParsedUrlQuery {
  id: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const pets = await getPets();
  const paths = pets.map((pet: Pet) => ({
    params: { id: pet.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps: GetStaticProps<PetsProps> = async (context) => {
  const { id } = context.params as Params;
  // console.log(context.params);
  const pet = await getPetOne(Number(id));
  return {
    props: {
      pet,
    },
  };
};

const index: NextPage<PetsProps>  = ({ pet })  => {
  console.log(pet);
  return (
    <ClientLayout>
      <PetDetail />
    </ClientLayout>
  )
}

export default index