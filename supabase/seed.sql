-- ============================================
-- Inserir produtos iniciais no Supabase
-- Execute este SQL no SQL Editor
-- ============================================

INSERT INTO public.products (name, slug, description, category, price, promotional_price, stock, images, specs, visible, featured, best_seller) VALUES

('iPhone 15 Pro 256GB', 'iphone-15-pro-256gb', 'Smartphone premium com chip A17 Pro, câmera avançada e acabamento em titânio.', 'celulares', 8299, 7499, 18,
 ARRAY['https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=1200&q=85'],
 '{"Tela":"6.1 polegadas Super Retina XDR","Armazenamento":"256GB","Processador":"A17 Pro","Garantia":"12 meses"}',
 true, true, true),

('Galaxy S24 Ultra 512GB', 'galaxy-s24-ultra-512gb', 'Tela imersiva, câmera de alta resolução e recursos inteligentes para produtividade.', 'celulares', 8999, 7899, 12,
 ARRAY['https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=1200&q=85'],
 '{"Tela":"6.8 polegadas AMOLED","Armazenamento":"512GB","Câmera":"200MP","Bateria":"5000mAh"}',
 true, true, true),

('Smartwatch Active Pro', 'smartwatch-active-pro', 'Monitoramento de saúde, chamadas Bluetooth e bateria para vários dias.', 'smartwatch', 1299, 999, 36,
 ARRAY['https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=1200&q=85'],
 '{"Tela":"AMOLED 1.43 polegadas","Bateria":"Até 10 dias","Resistência":"5 ATM","Conexão":"Bluetooth"}',
 true, true, false),

('Fone Noise Canceling Air', 'fone-noise-canceling-air', 'Fone sem fio com cancelamento ativo de ruído, modo ambiente e case compacto.', 'fones', 999, 699, 52,
 ARRAY['https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=1200&q=85'],
 '{"Bateria":"Até 30 horas","Recurso":"ANC","Conexão":"Bluetooth 5.3","Garantia":"12 meses"}',
 true, true, false),

('Power Bank 20000mAh USB-C', 'power-bank-20000mah-usb-c', 'Carregamento rápido para celular, tablet e acessórios com proteção inteligente.', 'acessorios', 349, 249, 80,
 ARRAY['https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&w=1200&q=85'],
 '{"Capacidade":"20000mAh","Entrada":"USB-C","Saída":"22.5W","Proteção":"Contra sobrecarga"}',
 true, false, true),

('Xiaomi 15C 256GB', 'xiaomi-15c-256gb', 'Smartphone Xiaomi com tela ampla, câmera de alta qualidade e 256GB de armazenamento para todos os seus apps e fotos.', 'celulares', 1320, NULL, 20,
 ARRAY['/xiaomi-15c.webp'],
 '{"Armazenamento":"256GB","Câmera":"50MP","Bateria":"5160mAh","Tela":"6.88 polegadas"}',
 true, true, false);
