// src/Componentes/Aviso/Aviso.jsx
import React from 'react';

export default function Aviso({ onClose }) { // Prop para fechar o modal
  return (
    <div className="modal-dialog modal-lg modal-dialog-centered"> {/* Modal grande e centralizado */}
      <div className="modal-content">
        <div className="modal-header bg-primary text-white">
          <h5 className="modal-title fw-bold">Aviso Legal</h5>
          <button 
            type="button" 
            className="btn-close btn-close-white" 
            onClick={onClose} // Fecha o modal
            aria-label="Fechar"
          ></button>
        </div>
        <div className="modal-body p-4"> {/* Corpo do modal com card grande */}
          <div className="card h-100 border-0 shadow-sm"> {/* Card grande, sem borda, com sombra */}
            <div className="card-body text-center p-4"> {/* Corpo centralizado */}
              <h1 className="display-5 fw-bold mb-4" style={{ color: '#333' }}>Aviso Legal</h1> {/* Título menor para modal */}
              <div className="bg-white p-4 rounded shadow-sm border mb-3"> {/* Caixa interna branca para destaque */}
                <p className="lead mb-4" style={{ color: '#333', fontSize: '1.1rem' }}>
                  Esta página e os conteúdos apresentados são <strong>meramente ilustrativos</strong>.
                </p>
                <p className="mb-3" style={{ color: '#333', lineHeight: '1.6' }}>
                  As imagens, descrições, preços e exemplos de produtos exibidos neste site têm finalidade exclusivamente demonstrativa e educativa. Eles não constituem ofertas reais, garantias de disponibilidade, qualidade ou entrega de mercadorias. Os produtos mostrados podem variar em cor, tamanho, material ou disponibilidade real, dependendo de fornecedores e estoque atual.
                </p>
                <p className="mb-3" style={{ color: '#333', lineHeight: '1.6' }}>
                  A ModaShop reserva todos os direitos sobre o conteúdo, incluindo imagens, textos e design. Qualquer uso não autorizado é proibido. Este site é mantido para fins informativos e não substitui uma consulta direta ou contrato formal.
                </p>
                <p className="mb-4" style={{ color: '#333', lineHeight: '1.6' }}>
                  Para dúvidas, sugestões ou informações sobre produtos reais, entre em contato conosco através do e-mail: contato@modashop.com ou pelo telefone: (11) 99999-9999. Atualizações neste aviso podem ocorrer sem prévio aviso.
                </p>
                <hr className="my-4" /> {/* Linha separadora */}
                <p className="text-muted small mb-0">
                  © 2024 ModaShop. Todos os direitos reservados. | Última atualização: {new Date().toLocaleDateString('pt-BR')}
                </p>
              </div>
              <button 
                className="btn btn-primary w-100 mt-3" 
                onClick={onClose} // Fecha o modal
              >
                Entendi
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
