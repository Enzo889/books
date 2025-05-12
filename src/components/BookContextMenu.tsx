import React from 'react';
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from '@/components/ui/context-menu';
import type { Book } from '../data/books';

interface BookContextMenuProps {
  book: Book;
  children: React.ReactNode;
}

export const BookContextMenu: React.FC<BookContextMenuProps> = ({ book, children }) => {
  const handleCopyTitle = () => {
    navigator.clipboard.writeText(book.title);
    // Podrías agregar una notificación de "copiado" aquí
  };

  const handleCopyAuthor = () => {
    navigator.clipboard.writeText(book.author);
    // Podrías agregar una notificación de "copiado" aquí
  };

  const handleOpenImage = () => {
    window.open(book.coverImage, '_blank');
  };

  return (
    <ContextMenu>
      <ContextMenuTrigger >{children}</ContextMenuTrigger>
      <ContextMenuContent className="w-64">
        <ContextMenuItem onClick={handleCopyTitle}>Copiar Título</ContextMenuItem>
        <ContextMenuItem onClick={handleCopyAuthor}>Copiar Autor</ContextMenuItem>
        <ContextMenuItem onClick={handleOpenImage}>Abrir imagen en nueva pestaña</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>Más opciones...</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
};