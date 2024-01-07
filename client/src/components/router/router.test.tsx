import { fireEvent, render, screen} from '@testing-library/react';
import { describe, it, expect} from 'vitest';
import { MemoryRouter, Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/main-layout";
import Home from "../home/home";
import { MisdemeanourContainer } from "../misdemeanours/misdemeanour-container";
import Confession from "../confession/confession";
import NotFound from "../not-found/not-found";

describe('Navbar routing test', () => {
    it('navigates to confession page and displays Confession title', () => {
      // arrange
      render(
          <MemoryRouter initialIndex={0} initialEntries={['/testbase']}>
            <Routes>
        <Route path = "/" element = {<MainLayout/>}>
            <Route index element = {<Home/>}/>
            <Route path = "misdemeanours" element = {<MisdemeanourContainer />}/>
            <Route path = "confession" 
            element = {<Confession/>}/>
            <Route path = "*" element = {<NotFound/>}/>
        </Route>
    </Routes>
          </MemoryRouter>
      );
  
      // act
      fireEvent.click(screen.getByText("Confess To Us"));
  
      // assert
      expect(screen.getByText('Confess To Us')).toBeInTheDocument();
    });

  });
